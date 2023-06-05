if (window.innerWidth>1200) {

const larghezzaSchermo = window.innerWidth;
const larghezzaDiv = larghezzaSchermo*0.2;
const larghezzaP = larghezzaDiv*0.8;
const paragrafi = document.querySelectorAll(".testocollegamento");
const titoli = document.querySelectorAll(".titolocollegamento")

window.onresize = function() {
    const larghezzaSchermo = window.innerWidth;
    const larghezzaDiv = larghezzaSchermo*0.2;
    const larghezzaP = larghezzaDiv*0.8;
}

paragrafi.forEach(function(paragrafo) {
    paragrafo.style.width = larghezzaP + "px";
  });
}