const box = document.getElementById("box");
const brTopLeft = document.getElementById("border-radius-top-left");
const brTopRight = document.getElementById("border-radius-top-right");
const brBottomLeft = document.getElementById("border-radius-bottom-left");
const brBottomRight = document.getElementById("border-radius-bottom-right");
const copyButton = document.getElementById("btn");

let cssProperties = [];

const setTopLeftRadius = e => {
  box.style.borderTopLeftRadius = `${e.target.value}px`;
};

const setTopRightRadius = e => {
  box.style.borderTopRightRadius = `${e.target.value}px`;
};

const setBottomLeftRadius = e => {
  box.style.borderBottomLeftRadius = `${e.target.value}px`;
};

const setBottomRightRadius = e => {
  box.style.borderBottomRightRadius = `${e.target.value}px`;
};

brTopLeft.addEventListener("input", setTopLeftRadius);
brTopRight.addEventListener("input", setTopRightRadius);
brBottomLeft.addEventListener("input", setBottomLeftRadius);
brBottomRight.addEventListener("input", setBottomRightRadius);

function createCopy() {
  testFunction();
  cssCopy();
}

const testFunction = () => {
  cssProperties.push(
    `border-top-left-radius: ${box.style.borderTopLeftRadius};`
  );
  cssProperties.push(
    `border-top-right-radius: ${box.style.borderTopRightRadius};`
  );
  cssProperties.push(
    `border-bottom-left-radius: ${box.style.borderBottomLeftRadius};`
  );
  cssProperties.push(
    `border-bottom-right-radius: ${box.style.borderBottomRightRadius};`
  );
  console.log(cssProperties.join(""));
};

const cssCopy = () => {
  const el = document.createElement("textarea");
  el.value = cssProperties.join("");
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
copyButton.addEventListener("click", createCopy);
