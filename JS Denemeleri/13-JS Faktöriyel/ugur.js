const inp1 = document.getElementById("inp1");
const btn = document.getElementById("btn");
const content = document.querySelector("div");

btn.addEventListener("click", function () {
  let sonuc = 1;
  for (let i = 1; i <= Number(inp1.value); i++) {
    sonuc *= i;
    content.innerHTML = sonuc;
  }
});
