const CACHE='kana-v6';
const ASSETS=['./','./index.html','./manifest.json','./firebase-config.js','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  // 외부(Firebase/구글 CDN·실시간 통신)는 서비스워커가 건드리지 않고 그대로 통과 → 동기화 방해 방지
  if(new URL(req.url).origin!==location.origin) return;
  const isDoc = req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html');
  if(isDoc){ // HTML은 네트워크 우선 → 배포하면 최신본이 바로 반영
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));return r;}).catch(()=>caches.match(req).then(m=>m||caches.match('./index.html'))));
  } else { // 정적 파일은 캐시 우선(오프라인 대비)
    e.respondWith(caches.match(req).then(m=>m||fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));return r;})));
  }
});
