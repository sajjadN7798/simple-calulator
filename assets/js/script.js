const num = document.querySelectorAll(".num"),
  ops = document.querySelectorAll(".ops"),
  viewer = document.querySelector(".viewer"),
  equals = document.querySelector(".equals"),
  clear = document.querySelector(".clear"),
  remove = document.querySelector(".remove"),
  isMathematicalExpression = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
num.forEach((item) => {
  item.onclick = () => {
    const value = item.getAttribute("data-num");
    if (hasNumber(value) || value === ".") {
      const newValue = appendValues(value);
      setView(newValue);
    } else alert("Number is invalid");
  };
});
ops.forEach((item) => {
  item.onclick = () => {
    const value = item.textContent,
      newValue = appendValues(value);
    setView(newValue);
  };
});
clear.onclick = () => {
  setView("");
};
remove.onclick = () => {
  const length = getCurrentValue().length;
  setView(getCurrentValue().substring(0, length - 1));
};
equals.onclick = () => {
  const finalValue = getCurrentValue();
  if (isValid(finalValue)) setView(eval(finalValue));
  else alert("Mathematical expression is invalid");
};

function setView(value) {
  viewer.innerHTML = value;
}

function isValid(expression) {
  return isMathematicalExpression.test(expression);
}

function hasNumber(string) {
  return /\d/.test(string);
}

function getCurrentValue() {
  return viewer.textContent;
}

function appendValues(newValue) {
  return getCurrentValue() + newValue;
}
