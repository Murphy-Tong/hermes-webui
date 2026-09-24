#!/usr/bin/env python3
"""隔离的真实页面/SSE 回放：记录基线并验证正文节点与阅读锚点。

不连接模型，不使用真实 home、profile、会话或凭据。
MEASURE_BASELINE=1 只记录旧版结果；默认模式执行新渲染器验收断言。
"""
import json
import os
import tempfile
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

from browser_conversation_lifecycle import _start_webui_server, _terminate_process
from browser_reconnect_scene_redraw import INIT, session_route

ROOT = Path(__file__).resolve().parent.parent


def wait_boot(page, errors):
    deadline = time.monotonic() + 40
    while not page.evaluate("typeof loadSession === 'function' && S._bootReady === true"):
        assert time.monotonic() < deadline, ('boot timeout', errors)
        page.wait_for_timeout(50)


CAPTURE = """() => {
  const box = document.getElementById('messages');
  const top = box.getBoundingClientRect().top;
  const rows = [...document.querySelectorAll('#msgInner [data-message-anchor-key]')];
  const anchor = rows.find(node => {
    const r = node.getBoundingClientRect();
    return r.height > 0 && r.top >= top && r.top < top + box.clientHeight;
  });
  if (!anchor) throw new Error('没有可测量的阅读锚点');
  window.fixtureAnchor = { node: anchor, key: anchor.dataset.messageAnchorKey,
    offset: anchor.getBoundingClientRect().top - top, scrollTop: box.scrollTop };
  return {key: fixtureAnchor.key, offset: fixtureAnchor.offset,
    scrollTop: box.scrollTop, scrollHeight: box.scrollHeight, pinned: _scrollPinned};
}"""
MEASURE = """() => {
  const box = document.getElementById('messages');
  const anchor = [...document.querySelectorAll('#msgInner [data-message-anchor-key]')]
    .find(node => node.dataset.messageAnchorKey === fixtureAnchor.key);
  return { connected: fixtureAnchor.node.isConnected, sameNode: anchor === fixtureAnchor.node,
    delta: anchor ? anchor.getBoundingClientRect().top - box.getBoundingClientRect().top - fixtureAnchor.offset : null,
    scrollDelta: box.scrollTop - fixtureAnchor.scrollTop, pinned: _scrollPinned };
}"""


def main():
    baseline = bool(os.environ.get('MEASURE_BASELINE'))
    results = []
    with tempfile.TemporaryDirectory(prefix='webui-markdown-') as temp:
        state = Path(temp)
        env = {key: os.environ[key] for key in ('PATH', 'SYSTEMROOT', 'TMPDIR') if key in os.environ}
        env.update(HOME=temp, HERMES_HOME=temp, HERMES_BASE_HOME=temp,
                   HERMES_WEBUI_STATE_DIR=str(state / 'webui'), HERMES_CONFIG_PATH=str(state / 'config.yaml'),
                   HERMES_WEBUI_HOST='127.0.0.1', HERMES_WEBUI_SKIP_ONBOARDING='1',
                   HERMES_WEBUI_AGENT_DIR=str(state / 'no-agent'))
        proc, log, _, base = _start_webui_server(ROOT, env, state)
        try:
            with sync_playwright() as pw:
                for engine in os.environ.get('BROWSERS', 'chromium,webkit').split(','):
                    launch = {'headless': True}
                    if engine == 'chromium' and os.environ.get('BROWSER_EXECUTABLE'):
                        launch['executable_path'] = os.environ['BROWSER_EXECUTABLE']
                    browser = getattr(pw, engine).launch(**launch)
                    try:
                        for mode in os.environ.get('MODES', 'compact_worklog,transparent_stream,hide_all_activity').split(','):
                            for width in [1280, 390]:
                                context = browser.new_context(viewport={'width': width, 'height': 844})
                                context.add_init_script(INIT)
                                page = context.new_page()
                                errors = []
                                page.on('pageerror', lambda error: errors.append(str(error)))
                                # 不发送第三方请求；浏览器验证不依赖外部 CDN 在线。
                                page.route('https://**/*', lambda route: route.abort())
                                messages = []
                                for i in range(35):
                                    messages.extend([
                                        dict(role='user', content=f'历史问题 {i}', timestamp=i * 2 + 1),
                                        dict(role='assistant', content=f'历史回答 {i}\n\n' + ('用于阅读锚点的稳定段落。' * 20), timestamp=i * 2 + 2),
                                    ])
                                sid, stream = 'markdown-fixture', 'markdown-run'
                                session = dict(session_id=sid, title='Markdown streaming fixture', model='',
                                               workspace=temp, messages=messages, message_count=len(messages), tool_calls=[],
                                               active_stream_id=stream, pending_user_message='继续流式输出', pending_started_at=100,
                                               runtime_journal_snapshot=dict(stream_id=stream, last_seq=1, last_event_id=f'{stream}:1',
                                                                             messages=[], tool_calls=[], last_assistant_text='', last_reasoning_text=''))
                                page.route('**/api/session?*', session_route(session, sid, temp))
                                page.route('**/api/chat/stream/status?*', lambda route: route.fulfill(json={'active': True}))
                                page.goto(base, wait_until='load')
                                wait_boot(page, errors)
                                page.evaluate("mode => { window._chatActivityDisplayMode=mode; window._showThinking=true; window._simplifiedToolCalling=true; }", mode)
                                page.evaluate('sid => loadSession(sid)', sid)
                                deadline = time.monotonic() + 10
                                while not page.evaluate("fixtureSources.some(s => s.url.includes('api/chat/stream?'))"):
                                    assert time.monotonic() < deadline, errors
                                    page.wait_for_timeout(50)
                                page.evaluate("""() => {
                                  window.fixtureSource = fixtureSources.findLast(s => s.url.includes('api/chat/stream?'));
                                  fixtureSource.emit('token', {text:'## 流式正文\\n\\n<details><summary>展开</summary>交互内容</details>\\n\\n'}, 'markdown-run:2');
                                }""")
                                page.wait_for_timeout(500)
                                box = page.locator('#messages').bounding_box()
                                page.mouse.move(box['x'] + box['width'] / 2, box['y'] + box['height'] / 2)
                                page.mouse.wheel(0, -550)
                                page.wait_for_timeout(300)
                                before = page.evaluate(CAPTURE)
                                assert before['scrollTop'] > 0 and not before['pinned'], before
                                page.evaluate("""() => {
                                  for(let i=0;i<20;i++) fixtureSource.emit('token', {text:'新增流式内容 '+i+'。\\n\\n'}, 'markdown-run:'+(i+3));
                                }""")
                                page.wait_for_timeout(350)
                                appended = page.evaluate(MEASURE)
                                page.evaluate("renderMessages({preserveScroll:true})")
                                page.wait_for_timeout(350)
                                redrawn = page.evaluate(MEASURE)
                                result = dict(engine=engine, width=width, mode=mode, before=before,
                                              appended=appended, redrawn=redrawn,
                                              html=page.locator('#liveAssistantTurn details').count(), errors=errors)
                                results.append(result)
                                print(json.dumps(result, ensure_ascii=False), flush=True)
                                if not baseline:
                                    for measured in [appended, redrawn]:
                                        assert measured['sameNode'] and measured['connected'], result
                                        assert measured['delta'] is not None and abs(measured['delta']) <= 2, result
                                        assert not measured['pinned'], result
                                    assert result['html'] > 0, result
                                    assert not errors, errors
                                screenshots = os.environ.get('SCREENSHOT_DIR')
                                if screenshots:
                                    Path(screenshots).mkdir(parents=True, exist_ok=True)
                                    page.screenshot(path=str(Path(screenshots) / f'{engine}-{mode}-{width}.png'))
                                context.close()
                    finally:
                        browser.close()
        finally:
            _terminate_process(proc)
            log.close()
    if os.environ.get('METRICS_FILE'):
        Path(os.environ['METRICS_FILE']).write_text(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
