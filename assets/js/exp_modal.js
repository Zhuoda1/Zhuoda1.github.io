const expItem = document.querySelectorAll("[data-exp-item]");
console.log(expItem);
const expModalContainer = document.querySelector("[exp-modal-container]");
const expModalCloseBtn = document.querySelector("[exp-modal-close-btn]");
const expOverlay = document.querySelector("[exp-overlay]");

// modal variable
// const modalImg = document.querySelector("[data-modal-img]");
const expModalTitle = document.querySelector("[exp-modal-title]");
const expModalText = document.querySelector("[exp-modal-text]");
const expModalTime = document.querySelector("[exp-modal-time]")
const expModalCompany = document.querySelector("[exp-modal-company]")

// modal toggle function
const expModalFunc = function () {
    expModalContainer.classList.toggle("active");
    expOverlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < expItem.length; i++) {

  expItem[i].addEventListener("click", function () {

    // modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    // modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    let comp = this.querySelector("[data-exp-company]");
    expModalCompany.innerHTML = comp ? comp.innerHTML : "";
    expModalTime.innerHTML = this.querySelector("[data-exp-time]").innerHTML;
    expModalTitle.innerHTML = this.querySelector("[data-exp-title]").innerHTML;
    expModalText.innerHTML = this.querySelector("[data-exp-text]").innerHTML;

    expModalFunc();

  });

}

// add click event to modal close button
expModalCloseBtn.addEventListener("click", expModalFunc);
expOverlay.addEventListener("click", expModalFunc);
