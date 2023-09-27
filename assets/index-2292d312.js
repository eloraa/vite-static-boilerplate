(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const m=""+new URL("javascript-24c7a79f.svg",import.meta.url).href,g=""+new URL("vite-562b953b.svg",import.meta.url).href;function v(o){let r=0;const n=c=>{r=c,o.innerHTML=`Count Is ${r}`};o.parentNode.addEventListener("click",()=>n(r+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" class="logo" target="_blank">
      <img src="${g}" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="logo vanilla" target="_blank">
      <img src="${m}" alt="JavaScript logo" />
    </a>
    <h1>VITE STATIC BOILERPLATE</h1>
    <h1>Create cool</h1>
    <div class="card">
      <button type="button">
        <span class="spinner"><svg viewBox="0 0 18 18">
        <path d="M6.254 17.5863L6.72417 12.3786L2.4339 15.3967L0.0830688 11.2542L4.78473 9.06455L0.0830688 6.87493L2.4339 2.73241L6.72417 5.75053L6.254 0.542786H10.9557L10.4855 5.75053L14.7758 2.73241L17.1266 6.87493L12.4249 9.06455L17.1266 11.2542L14.7758 15.3967L10.4855 12.3786L10.9557 17.5863H6.254Z" fill="#FF3C00"/>
      </svg></span>
        <span id="counter"></span>
      </button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`;const p=document.querySelector("#counter");v(p);const h=document.querySelector("span.spinner"),y=document.querySelectorAll("footer h4");let l=0,f=0,a=0,s=0;const u=.05;function L(){l=d(l,f,u),s===100?a=0:a=d(a,s,u),h.style.transform=`rotate(${l}deg)`,y.forEach(o=>{o.style.transform=`translateX(-${a}%)`}),requestAnimationFrame(L)}function d(o,r,n){return o*(1-n)+r*n}p.parentNode.addEventListener("click",()=>{f+=45,s+=1,s>100&&(s=0)});L();
