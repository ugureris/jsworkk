const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const btn = document.getElementById("btn");
const content = document.querySelector("div");

inp2.addEventListener("keyup", function () {
  const total = Number(inp1.value) + Number(inp2.value);
  content.innerHTML = total;
});
