parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"fi17":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={galleryList:document.querySelector(".js-gallery"),modal:document.querySelector(".js-lightbox"),modalImg:document.querySelector(".lightbox__image")};exports.refs=e;
},{}],"chxP":[function(require,module,exports) {
"use strict";var e=r(require("./gallery-items")),a=require("./refs/refs");function r(e){return e&&e.__esModule?e:{default:e}}let t=null;const s=e.default.map(({preview:e,original:a,description:r})=>`<li class="gallery__item">\n    <a\n      class="gallery__link"\n      href="${a}"\n      data-source="${a}"\n    >\n      <img\n        class="gallery__image"\n        src="${e}"\n        data-source="${a}"\n        alt="${r}"\n      />\n    </a>\n  </li>`);function n(e){e.preventDefault(),e.target.classList.contains("gallery__image")||(s.forEach((a,r)=>{a.includes(e.target.dataset.source)&&(t=r)}),a.refs.modal.classList.add("is-open"),a.refs.modalImg.src=e.target.dataset.source,window.addEventListener("keydown",i))}function l(e){"IMG"!==e.target.nodeName&&(a.refs.modal.classList.remove("is-open"),a.refs.modalImg.src=" ",window.removeEventListener("keydown",i))}function i(r){switch(r.key){case"Escape":l(r);break;case t<e.default.length-1&&"ArrowRight":t+=1,a.refs.modalImg.src=e.default[t].original;break;case t>0&&"ArrowLeft":t-=1,a.refs.modalImg.src=e.default[t].original;break;case t===e.default.length-1&&"ArrowRight":t=0,a.refs.modalImg.src=e.default[t].original;break;case 0===t&&"ArrowLeft":t=e.default.length-1,a.refs.modalImg.src=e.default[t].original}}function o(e){e.target.classList.contains("gallery__link")&&"Enter"===e.key&&n(e)}a.refs.galleryList.insertAdjacentHTML("afterbegin",s.join("")),a.refs.galleryList.addEventListener("click",n),a.refs.modal.addEventListener("click",l),window.addEventListener("keydown",o);
},{"./gallery-items":"q5Rn","./refs/refs":"fi17"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/gallery");
},{"./js/gallery":"chxP"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09/src.8c9a314b.js.map