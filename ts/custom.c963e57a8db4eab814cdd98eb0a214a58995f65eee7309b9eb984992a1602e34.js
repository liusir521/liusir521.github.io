(()=>{var o=()=>{if(!document.body.classList.contains("article-page"))return;let t=document.createElement("button");t.id="back-to-top",t.className="back-to-top",t.type="button",t.setAttribute("aria-label","\u56DE\u5230\u6587\u7AE0\u9876\u90E8"),t.setAttribute("title","\u56DE\u5230\u9876\u90E8"),t.innerHTML=`
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12z"></path>
        </svg>
    `,document.body.appendChild(t);let e=()=>{t.classList.toggle("is-visible",window.scrollY>320)};t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",e,{passive:!0}),e()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o();})();
