let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    h1.innerHTML = "Friend";
    h1.style.color = " rgba(55, 138, 44, 1)";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    h1.innerHTML = "Stranger";
    h1.style.color = 'rgb(196, 84, 84)';
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
})
