let buttonEL = document.getElementById("reverse-button");

buttonEL.addEventListener("click", function () {
  let p = document.getElementById("reversed-p");
  let inputEl = document.getElementById("reversed-input");
  let normalString = inputEl.value;

  let reversedString = "";
  for (let i = normalString.length - 1; i >= 0; i--) {
    // Fix: Start at last index and go to 0
    reversedString = reversedString + normalString[i];
  }

  p.innerText = reversedString;
});
