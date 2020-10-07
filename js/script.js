const utternance = new SpeechSynthesisUtterance();

utternance.rate = 2;
utternance.lang = "pt-BR";

function speak() {
  speechSynthesis.speak(utternance);
}

function stop() {
  speechSynthesis.cancel();
}

function setText(event) {
  utternance.text = event.target.innerText;
}
