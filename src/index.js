function generateQuote(event) {
  event.preventDefault();
  new Typewriter("#output", {
    strings: "Smile is beautiful",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteInput = document.querySelector("#textInput");
let generateForm = document.querySelector("#generateForm");
generateForm.addEventListener("submit", generateQuote);
