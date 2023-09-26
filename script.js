"use strict";

// ESLint

const btnOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", () => {
    //  console.log(btnModal[i].textContent);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Escape") closeModal();
});



const btnOpenBar = document.querySelectorAll(".openbar");
const btnCloseBar = document.querySelector(".closebar");
const Bar = document.querySelector(".navbar");
// console.log(btnOpenModal);

for (let i = 0; i < btnOpenBar.length; i++) {
  btnOpenBar[i].addEventListener("click", () => {
    Bar.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

function closeBar() {
  Bar.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseBar.addEventListener("click", closeBar);

document.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.key === "Escape") closeBar();
});