const clearBtn = document.querySelector(".clear-btn");
const leapNextBtn = document.querySelector(".leap-next-btn");
const leapBackBtn = document.querySelector(".leap-back-btn");

const pondText = document.querySelector(".pond-text");
const frogText = document.querySelector(".frog-text");

const pond = document.querySelector(".pond");
const frogWrapper = document.querySelector(".frog-wrapper");
const frog = document.querySelector(".frog");

const setAttrs = (el, value = "") => {
  el.setAttribute("style", value);
};

const getElmsCenterPosition = (elms) => {
  const rect = elms.getBoundingClientRect();
  return (
    {
      left: rect.left + (rect.right - rect.left) / 2,
      top: rect.top + (rect.bottom - rect.top) / 2
    } || {}
  );
};

const initFrog = () => {
  frog.classList.remove("frog-green");
  frog.classList.remove("frog-red");
  frog.classList.add("frog-yellow");
};

clearBtn.addEventListener("click", () => {
  pondText.value = "";
  frogText.value = "";
  setAttrs(pond, "");
  setAttrs(frogWrapper, "");
  initFrog();
});

leapBackBtn.addEventListener("click", () => {
  setAttrs(pond, "");
  setAttrs(frogWrapper, "");
  initFrog();
});

leapNextBtn.addEventListener("click", () => {
  try {
    setAttrs(pond, pondText.value);
    setAttrs(frogWrapper, frogText.value);

    const pondCenter = getElmsCenterPosition(pond);
    const frogCenter = getElmsCenterPosition(frogWrapper);

    frog.classList.remove("frog-yellow");

    if (
      frogCenter.left === pondCenter.left &&
      frogCenter.top === pondCenter.top
    ) {
      frog.classList.add("frog-green");
    } else {
      frog.classList.add("frog-red");
    }
    console.log(pondCenter, frogCenter);
  } catch (e) {
    setAttrs(pond, "");
    setAttrs(frogWrapper, "");
    alert(e);
  }
});
