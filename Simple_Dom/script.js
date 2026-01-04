let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (h1.innerHTML === "Hello") {
    h1.innerHTML = "I am Lucky";
    h1.style.color = 'rgba(255, 255, 255, 1)';
  } else {
    h1.innerHTML = "Hello";
    h1.style.color = "rgb(0, 183, 255)";
  }
});
