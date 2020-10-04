import { setAttrs, getElmsCenterPosition, isSameCenterPoint } from "./utils.js";

const clearBtn = document.querySelector(".clear-btn");
const leapNextBtn = document.querySelector(".leap-next-btn");
const leapBackBtn = document.querySelector(".leap-back-btn");

const pondText = document.querySelector(".pond-text");
const frogText = document.querySelector(".frog-text");

const pond = document.querySelector(".pond");
const frog = document.querySelector(".frog");

const clearAttrsAndClass = () => {
  setAttrs(pond, "");
  setAttrs(frog, "");
  frog.classList.remove("frog-green");
  frog.classList.remove("frog-red");
  frog.classList.add("frog-yellow");
  frog.classList.add("animated");
};

clearBtn.addEventListener("click", () => {
  pondText.value = "";
  frogText.value = "";
  clearAttrsAndClass();
});

leapBackBtn.addEventListener("click", () => {
  clearAttrsAndClass();
});

leapNextBtn.addEventListener("click", () => {
  try {
    frog.classList.remove("animated");

    setAttrs(pond, pondText.value);
    setAttrs(frog, frogText.value);

    const pondCenter = getElmsCenterPosition(pond);
    const frogCenter = getElmsCenterPosition(frog);

    frog.classList.remove("frog-yellow");

    if (isSameCenterPoint(frogCenter, pondCenter)) {
      frog.classList.add("frog-green");
    } else {
      frog.classList.add("frog-red");
      frog.classList.add("animated");
    }

    console.log(pondCenter, frogCenter);
  } catch (e) {
    clearAttrsAndClass();
    alert(e);
  }
});
