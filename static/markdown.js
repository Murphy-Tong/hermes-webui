/* 原生外壳的 Markdown 桥接：一个加载 Promise，实例持有内容及身份快照。 */
(function(){
  'use strict';
  const script=document.currentScript;
  const entry=new URL('renderer/index.js',script.src);
  entry.search=new URL(script.src).search;
  const ready=import(entry.href).then(module=>module.HermesMarkdown);
  // 加载失败由每个正文槽显示安全原文，不产生未处理的 Promise rejection。
  ready.catch(()=>{});
  const hosts=new WeakMap();
  const identity=options=>JSON.stringify([options.key,options.context?.surface||'chat',options.context?.profileId||'',options.context?.sessionId||'']);
  const snapshot=options=>({...options,content:String(options.content??''),context:{...options.context,
    snapshots:{...options.context?.snapshots},iframeOrigins:[...(options.context?.iframeOrigins||[])]}});

  function mount(element,options){
    const id=identity(options);
    const old=hosts.get(element);
    if(old?.id===id){old.view.update(options);return old.view;}
    old?.view.destroy();
    let latest=snapshot(options),actual=null,destroyed=false,failed=false;
    const original=document.createElement('pre');
    original.className='hm-loading-source';
    original.style.whiteSpace='pre-wrap';
    original.textContent=latest.content;
    element.replaceChildren(original);
    element.dataset.hermesMarkdownHost=String(options.key);
    const showOriginal=()=>{
      original.textContent=latest.content;
      if(failed){
        const status=document.createElement('small');
        status.setAttribute('role','status');
        status.textContent='Markdown 加载失败，已显示可复制原文。';
        element.replaceChildren(status,original);
      }
    };
    const loaded=ready.then(renderer=>{
      if(destroyed)return;
      // 加载期间被导航移除的内容不能重新挂载或发起私有媒体请求。
      if(!element.isConnected){view.destroy();return;}
      try{actual=renderer.mount(element,latest);}
      catch(_){renderer.destroyWithin(element);failed=true;showOriginal();}
    }).catch(()=>{if(!destroyed){failed=true;showOriginal();}});
    const view={
      update(next){
        if(destroyed)return;
        const candidate={...latest,...next,key:latest.key};
        if(identity(candidate)!==id)throw new Error('Markdown 实例不能跨 session/profile 复用；请重新 mount。');
        latest=snapshot(candidate);
        if(actual)actual.update(next);else showOriginal();
      },
      destroy(){
        if(destroyed)return;
        destroyed=true;
        actual?.destroy();
        hosts.delete(element);
        delete element.dataset.hermesMarkdownHost;
        element.replaceChildren();
      },
      async settled(){await loaded;await actual?.settled();},
    };
    hosts.set(element,{id,view});
    return view;
  }
  function destroyWithin(root){
    if(!root)return;
    hosts.get(root)?.view.destroy();
    root.querySelectorAll?.('[data-hermes-markdown-host]').forEach(el=>hosts.get(el)?.view.destroy());
  }
  function owns(element){return !!element?.closest?.('[data-hermes-markdown-host]');}
  // 原生面板/虚拟窗口移除节点时的兜底；同步移动的节点仍连接，不会被销毁。
  const observer=new MutationObserver(records=>{
    for(const record of records)for(const node of record.removedNodes){
      if(node.nodeType===1&&!node.isConnected)destroyWithin(node);
    }
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});
  window.HermesMarkdown={mount,destroyWithin,owns,ready};
})();
