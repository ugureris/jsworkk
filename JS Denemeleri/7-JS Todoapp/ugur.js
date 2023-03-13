const ul = document.querySelector(".trash");
const li = document.querySelector(".list");
const addForm = document.querySelector(".add");

ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    e.target.parentElement.remove();
  }
});

function ekle(todo) {
  ul.innerHTML += `
  <li class="list">
    <span>${todo}</span>
    <i class="img del">X</i>
  </li>
    `;
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value;
  if (todo.length > 0) {
    ekle(todo);
    addForm.reset();
  }
});
