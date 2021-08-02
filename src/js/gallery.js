import galleryItems from "./gallery-items"
import {refs} from "./refs/refs"

// console.log(galleryItems);
// console.log(refs);

let activeIndex = null;

const markUp = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
      data-source="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
});

refs.galleryList.insertAdjacentHTML("afterbegin", markUp.join(""))
refs.galleryList.addEventListener("click", openModal)
refs.modal.addEventListener("click", closeModal)
window.addEventListener("keydown", openByEnter)

function openModal(event) {
    event.preventDefault()
    // if(event.target.nodeName !== "IMG"){
        if(event.target.classList.contains("gallery__image" || "gallery__link")){
        return;
    }

    markUp.forEach((el, index) => {
        if (el.includes(event.target.dataset.source)){
            activeIndex = index
        } 
    })


    refs.modal.classList.add("is-open")
    refs.modalImg.src = event.target.dataset.source

    window.addEventListener("keydown", keyboardManipulation)
}

function closeModal(event) {
if (event.target.nodeName === "IMG") {
    return;
}
refs.modal.classList.remove("is-open")
refs.modalImg.src = " "

window.removeEventListener("keydown", keyboardManipulation)
}



function keyboardManipulation (event) {
    switch(event.key){
        case "Escape":
            closeModal(event)   
            break;

       case activeIndex < galleryItems.length - 1 && "ArrowRight":
           activeIndex += 1;
           refs.modalImg.src = galleryItems[activeIndex].original
           break;

      case activeIndex > 0 && "ArrowLeft":
          activeIndex -= 1;
          refs.modalImg.src = galleryItems[activeIndex].original
          break;

    case activeIndex === galleryItems.length - 1 && "ArrowRight":
        activeIndex = 0;
        refs.modalImg.src = galleryItems[activeIndex].original
        break;

    case activeIndex === 0 && "ArrowLeft":
        activeIndex = galleryItems.length - 1
        refs.modalImg.src = galleryItems[activeIndex].original
        break;
    }
}


function openByEnter(event){
    if(!event.target.classList.contains("gallery__link") || event.key !== "Enter"){
        return;
    }
    openModal(event)
    // refs.modal.classList.add("is-open")
    // refs.modalImg.src = event.target.dataset.sourse
    // window.addEventListener("keydown", keyboardManipulation)
}