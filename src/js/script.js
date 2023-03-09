/* ACCORDION */
const ACCORDION_BTN_CONTAINER = document.querySelectorAll(
  ".accordion-btn-container"
);
const ACCORDION_ARROW = document.querySelector(".accordion__arrow");

ACCORDION_BTN_CONTAINER.forEach((accordion_item_container) => {
  accordion_item_container.addEventListener("click", onClickAccordionItem);
});

function onClickAccordionItem(e) {
  const accordionContent = e.currentTarget.nextElementSibling;
  if (accordionContent.classList.contains("hide")) {
    accordionContent.classList.remove("hide");
    accordionContent.classList.add("show");
    ACCORDION_ARROW.classList.remove("arrow__down");
    ACCORDION_ARROW.classList.add("arrow__up");
  } else if (accordionContent.classList.contains("show")) {
    accordionContent.classList.remove("show");
    accordionContent.classList.add("hide");
    ACCORDION_ARROW.classList.remove("arrow__up");
    ACCORDION_ARROW.classList.add("arrow__down");
  }
}

/* NEWSLETTER */
const ERROR_CONTAINER = document.querySelector("#error-container");
const EMAIL = document.querySelector("#email");
const ERROR_IMG = document.querySelector("#error-img");
const ERROR_MSG = document.querySelector("#error-msg");
const BTN_CONTACT = document.querySelector("#btn-contact-us");

let timeOut;

EMAIL.addEventListener("keyup", () => {
  clearTimeout(timeOut);
  timeOut = setTimeout(function () {
    removeError();
  }, 400);
});

BTN_CONTACT.addEventListener("click", onClickBtnContactUs);

function onClickBtnContactUs(e) {
  e.preventDefault();
  if (EMAIL.value === "") {
    ERROR_IMG.classList.remove("hide-acc");
    ERROR_IMG.classList.add("error-img");
    EMAIL.classList.add("error-field");
    ERROR_MSG.classList.remove("hide-acc");
    ERROR_MSG.classList.add("error-msg");
    ERROR_CONTAINER.classList.add("error-container");
    ERROR_MSG.textContent = "Make sure to enter an email";
  } else if (!validEmail(EMAIL.value)) {
    ERROR_IMG.classList.remove("hide-acc");
    ERROR_IMG.classList.add("error-img");
    EMAIL.classList.add("error-field");
    ERROR_MSG.classList.remove("hide-acc");
    ERROR_MSG.classList.add("error-msg");
    ERROR_CONTAINER.classList.add("error-container");
    ERROR_MSG.textContent = "Whoops, make sure it's an email";
  }
}

function validEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function removeError() {
  ERROR_IMG.classList.add("hide-acc");
  ERROR_IMG.classList.remove("error-img");
  EMAIL.classList.remove("error-field");
  ERROR_MSG.classList.add("hide-acc");
  ERROR_MSG.classList.remove("error-msg");
}
