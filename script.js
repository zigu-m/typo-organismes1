const text = document.getElementById("text");
const weight = document.getElementById("weight");
const width = document.getElementById("width");




function updateFont() {
  text.style.fontVariationSettings =
    `"wght" ${weight.value}, "wdth" ${width.value}`;
}

weight.addEventListener("input", updateFont);
width.addEventListener("input", updateFont);

input.addEventListener("input", () => {
preview.textContent = input.value;
});


