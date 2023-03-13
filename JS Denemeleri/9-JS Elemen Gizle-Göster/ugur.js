const div = document.querySelector(".totalDiv");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", function () {
  if (div.classList.contains("delete")) {
    div.classList.remove("delete");
  }
});

btn2.addEventListener("click", function () {
  div.classList.add("delete");
});

btn3.addEventListener("click", function () {
  div.classList.toggle("delete");
});
