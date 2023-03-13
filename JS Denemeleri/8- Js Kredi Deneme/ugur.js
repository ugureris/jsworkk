const money = document.querySelector("input");
const calculate = document.querySelector("button");
const select = document.getElementById("secim");
const cont = document.getElementById("content");

calculate.addEventListener("click", function () {
  const vade = select.value;
  if (vade == 12) {
    const total = Number(money.value) + (Number(money.value) * 10) / 100;
    const monthly = total / 12;
    cont.innerHTML = `Geri ödeyeceğiniz toplam tutar: ${total} <br> Aylık taksit tutarınız: ${monthly}`;
  } else if (vade == 24) {
    const total = Number(money.value) + (Number(money.value) * 20) / 100;
    const monthly = total / 24;
    cont.innerHTML = `Geri ödeyeceğiniz toplam tutar: ${total} <br> Aylık taksit tutarınız: ${monthly}`;
  } else if (vade == 36) {
    const total = Number(money.value) + (Number(money.value) * 30) / 100;
    const monthly = total / 36;
    cont.innerHTML = `Geri ödeyeceğiniz toplam tutar: ${total} <br> Aylık taksit tutarınız: ${monthly}`;
  }
});
