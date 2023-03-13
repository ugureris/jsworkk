let not = prompt("Notunuzu Girin:");
let info = document.querySelector(".info");
not <= 100 && not >= 0;

if (not >= 0 && not <= 100) {
  if (not >= 90) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: AA :)`;
    info.classList.add("primary");
  } else if (not >= 85) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: BA :)`;
    info.classList.add("primary");
  } else if (not >= 80) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: BB :)`;
    info.classList.add("primary");
  } else if (not >= 75) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: CB :)`;
    info.classList.add("primary");
  } else if (not >= 70) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: CC :)`;
    info.classList.add("primary");
  } else if (not >= 65) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: DC :)`;
    info.classList.add("primary");
  } else if (not >= 60) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: DD :)`;
    info.classList.add("primary");
  } else if (not >= 50) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: FD :)`;
    info.classList.add("primary");
  } else if (not <= 50) {
    info.innerHTML = `Notunuz: ${not} Harf Notunuz: FF :(`;
    info.classList.add("danger");
  }
} else {
  info.innerHTML = "Hatalı Kullanım";
}
