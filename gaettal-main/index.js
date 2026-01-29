let randomTal = Math.floor(Math.random() * 100);
console.log(randomTal);

const button = document.getElementById("btn");
const input = document.getElementById("guess");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  let brugerGæt = Number(input.value);

  if (brugerGæt === randomTal) {
    result.innerText = "🎉 Korrekt! Du gættede rigtigt!";
    document.body.style.backgroundColor = "lightgreen";
  } else if (brugerGæt < randomTal) {
    result.innerText = "⬆️ For lavt gæt! Prøv igen.";
    document.body.style.backgroundColor = "lightcoral";
  } else {
    result.innerText = "⬇️ For højt gæt! Prøv igen.";
    document.body.style.backgroundColor = "lightcoral";
  }
});
