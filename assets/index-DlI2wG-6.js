(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const d=[{id:0,logo:"./src/assets/images/logo-devlens.svg",name:"DevLens",description:"Quickly inspect page layouts and visualize element boundaries.",isActive:!0},{id:1,logo:"./src/assets/images/logo-style-spy.svg",name:"StyleSpy",description:"Instantly analyze and copy CSS from any webpage element.",isActive:!0},{id:2,logo:"./src/assets/images/logo-speed-boost.svg",name:"SpeedBoost",description:"Optimizes browser resource usage to accelerate page loading.",isActive:!1},{id:3,logo:"./src/assets/images/logo-json-wizard.svg",name:"JSONWizard",description:"Formats, validates, and prettifies JSON responses in-browser.",isActive:!0},{id:4,logo:"./src/assets/images/logo-tab-master-pro.svg",name:"TabMaster Pro",description:"Organizes browser tabs into groups and sessions.",isActive:!0},{id:5,logo:"./src/assets/images/logo-viewport-buddy.svg",name:"ViewportBuddy",description:"Simulates various screen resolutions directly within the browser.",isActive:!1},{id:6,logo:"./src/assets/images/logo-markup-notes.svg",name:"Markup Notes",description:"Enables annotation and notes directly onto webpages for collaborative debugging.",isActive:!0},{id:7,logo:"./src/assets/images/logo-grid-guides.svg",name:"GridGuides",description:"Overlay customizable grids and alignment guides on any webpage.",isActive:!1},{id:8,logo:"./src/assets/images/logo-palette-picker.svg",name:"Palette Picker",description:"Instantly extracts color palettes from any webpage.",isActive:!0},{id:9,logo:"./src/assets/images/logo-link-checker.svg",name:"LinkChecker",description:"Scans and highlights broken links on any page.",isActive:!0},{id:10,logo:"./src/assets/images/logo-dom-snapshot.svg",name:"DOM Snapshot",description:"Capture and export DOM structures quickly.",isActive:!1},{id:11,logo:"./src/assets/images/logo-console-plus.svg",name:"ConsolePlus",description:"Enhanced developer console with advanced filtering and logging.",isActive:!0}],g=document.getElementById("toggleThemeButton"),m=document.getElementById("iconTheme"),l=document.getElementById("extension-list"),c=document.querySelectorAll(".buttonState");let a=d;g.addEventListener("click",()=>{document.documentElement.classList.toggle("dark"),m.src=document.documentElement.classList.contains("dark")?"./src/assets/images/icon-sun.svg":"./src/assets/images/icon-moon.svg"});const v=d.map(e=>`
        <article class="min-h-50 max-w-100 w-full flex flex-col 
        items-stretch rounded-2xl p-5 bg-card desktop:max-w-[33%]">
          <div class="flex flex-row">
            <div class="w-1/4">
              <img src="${e.logo}" alt="${e.name} Icon" />
            </div>
            <div class="w-3/4 px-1 pb-5">
              <h2 class="text-xl font-bold font-notosans text-title">${e.name}</h2>
              <p class="text-base font-normal font-notosans text-text">${e.description}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button data-id="${e.id}" class="rounded-full border-2 border-Neutral-300 px-4 py-1 font-notosans font-medium
                  bg-buttonRemove text-text removeExtensionButton">
              Remove
            </button>

            <label class="relative inline-block w-9.5 h-5 cursor-pointer">

              <input type="checkbox" class="peer sr-only" ${e.isActive?"checked":""} />
              <div class="absolute inset-0 ${e.isActive?"bg-Red-400":"bg-gray-300"} rounded-[34px] transition duration-400
                  peer-checked:peer-focus:shadow-[0_0_1px_#2196F3]">
              </div>
              <div class="absolute left-1 bottom-1 w-3.5 h-3.5 bg-white rounded-full
                  transition duration-400
                  peer-checked:translate-x-4.5">
              </div>
            </label>
          </div>
        </article>`).join("");let p=a.filter(e=>e.isActive===!1);const f=p.map(e=>`
        <article class="min-h-50 max-w-100 w-full flex flex-col 
        items-stretch rounded-2xl p-5 bg-card desktop:max-w-[33%]">
          <div class="flex flex-row">
            <div class="w-1/4">
              <img src="${e.logo}" alt="${e.name} Icon" />
            </div>
            <div class="w-3/4 px-1 pb-5">
              <h2 class="text-xl font-bold font-notosans text-title">${e.name}</h2>
              <p class="text-base font-normal font-notosans text-text">${e.description}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button data-id="${e.id}" class="rounded-full border-2 border-Neutral-300 px-4 py-1 font-notosans font-medium
                  bg-buttonRemove text-text removeExtensionButton">
              Remove
            </button>

            <label class="relative inline-block w-9.5 h-5 cursor-pointer">

              <input type="checkbox" class="peer sr-only" ${e.isActive?"checked":""} />
              <div class="absolute inset-0 ${e.isActive?"bg-Red-400":"bg-gray-300"} rounded-[34px] transition duration-400
                  peer-checked:peer-focus:shadow-[0_0_1px_#2196F3]">
              </div>
              <div class="absolute left-1 bottom-1 w-3.5 h-3.5 bg-white rounded-full
                  transition duration-400
                  peer-checked:translate-x-4.5">
              </div>
            </label>
          </div>
        </article>`).join("");let b=a.filter(e=>e.isActive===!0);const x=b.map(e=>`
        <article class="min-h-50 max-w-100 w-full flex flex-col 
        items-stretch rounded-2xl p-5 bg-card desktop:max-w-[33%]">
          <div class="flex flex-row">
            <div class="w-1/4">
              <img src="${e.logo}" alt="${e.name} Icon" />
            </div>
            <div class="w-3/4 px-1 pb-5">
              <h2 class="text-xl font-bold font-notosans text-title">${e.name}</h2>
              <p class="text-base font-normal font-notosans text-text">${e.description}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button data-id="${e.id}" class="rounded-full border-2 border-Neutral-300 px-4 py-1 font-notosans font-medium
                  bg-buttonRemove text-text removeExtensionButton">
              Remove
            </button>

            <label class="relative inline-block w-9.5 h-5 cursor-pointer">

              <input type="checkbox" class="peer sr-only" ${e.isActive?"checked":""} />
              <div class="absolute inset-0 ${e.isActive?"bg-Red-400":"bg-gray-300"} rounded-[34px] transition duration-400
                  peer-checked:peer-focus:shadow-[0_0_1px_#2196F3]">
              </div>
              <div class="absolute left-1 bottom-1 w-3.5 h-3.5 bg-white rounded-full
                  transition duration-400
                  peer-checked:translate-x-4.5">
              </div>
            </label>
          </div>
        </article>`).join("");let u={all:v,inactive:f,active:x};l.innerHTML=u.all;const h=document.querySelectorAll(".removeExtensionButton");h.forEach(e=>{e.addEventListener("click",o=>{const i=o.currentTarget.getAttribute("data-id"),t=e.closest("article");t&&t.remove(),i&&(a=a.filter(s=>s.id!==Number(i)))})});l.addEventListener("click",e=>{const o=e.target;if(o.classList.contains("removeExtensionButton")){const n=o.getAttribute("data-id"),i=o.closest("article");i&&i.remove(),n&&(a=a.filter(t=>t.id!==Number(n)))}});c.forEach(e=>{e.addEventListener("click",o=>{const n=o.currentTarget,i=n.dataset.view;n.classList.toggle("active"),l.innerHTML=u[i],c.forEach(t=>t.classList.remove("active")),n.classList.add("active")})});
