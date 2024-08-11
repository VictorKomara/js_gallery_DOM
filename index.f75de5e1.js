"use strict";
const largeImg = document.querySelector("#largeImg");
const nav = document.querySelector(".gallery__list");
nav.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    if (!link) return;
    largeImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
