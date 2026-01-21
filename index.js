import{a as g,S as h,i}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const y="https://pixabay.com/api/",F="54287329-49d133b67cff4c69c0e9ecf68";function A(s){return g.get(y,{params:{key:F,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw console.error("Error fetching images:",r),r})}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:o,views:n,comments:d,downloads:m})=>`
<li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <img
                class="gallery-image"
                src="${t}"
                alt="${e}"
              />
        
            </a>
            <div class="info">
              <p class="info-lable">Likes <span>${o}</span></p>
              <p class="info-lable">Views <span>${n}</span></p>
              <p class="info-lable">Comments <span>${d}</span></p>
              <p class="info-lable">Downloads <span>${m}</span></p>
        </div>
          </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function C(){u.innerHTML=""}function B(){p.classList.remove("hidden")}function l(){p.classList.add("hidden")}const f=document.querySelector(".form"),c=f.querySelector("input[name='search-text']");f.addEventListener("submit",s=>{s.preventDefault();const r=c.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search term!",position:"topRight",backgroundColor:"#EF4040",titleColor:" #FAFAFB",messageColor:" #FAFAFB",iconColor:" #FAFAFB"});return}C(),B(),A(r).then(t=>{if(l(),t.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:" #FAFAFB",messageColor:" #FAFAFB",iconColor:" #FAFAFB"});return}L(t.hits)}).catch(t=>{l(),i.error({title:"Error",message:"Something went wrong. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:" #FAFAFB",messageColor:" #FAFAFB",iconColor:" #FAFAFB"})}),c.value=""});
//# sourceMappingURL=index.js.map
