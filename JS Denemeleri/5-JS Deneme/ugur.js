const userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const lik = document.querySelector(".lik");
const span = document.querySelector("span");

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#username");
  const SCORE = document.querySelector("score");

  lik.innerHTML = USER_NAME;
  span.innerHTML = SCORE;
}
