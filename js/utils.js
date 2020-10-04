export const setAttrs = (el, value = "") => {
  el.setAttribute("style", value);
};

export const getElmsCenterPosition = (elms) => {
  const rect = elms.getBoundingClientRect();
  const left = rect.left + (rect.right - rect.left) / 2;
  const top = rect.top + (rect.bottom - rect.top) / 2;
  return {
    left: Math.floor(left),
    top: Math.floor(top)
  };
};

const DIFF_RANGE = 5;

export const isSameCenterPoint = (obj1, obj2) => {
  return (
    Math.abs(obj1.left - obj2.left) <= DIFF_RANGE &&
    Math.abs(obj1.top - obj2.top) <= DIFF_RANGE
  );
};
