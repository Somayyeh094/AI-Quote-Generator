function generateQuote(response) {
  output.classList.remove("blink");
  new Typewriter("#output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function callApi(event) {
  event.preventDefault();
  let quoteInput = document.querySelector("#textInput");
  let apiKey = "71c9o8ef0370bd39a326b41301fb04bt";
  let context =
    "Please generate inspirational and motivational quotes. Each quote is placed within double quotation marks. write each quote like this format: quote<br/>. Give a number to each quote. Also only write quotes without any explanations";
  let prompt = `generate qoutes about ${quoteInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let outputAi = document.querySelector("#outputAi")
  outputAi.classList.remove("hidden");
  output.classList.add("blink");
  output.innerHTML = `<em>Generating quotes about "${quoteInput.value}". Please wait<em/> ....`;
  axios.get(apiUrl).then(generateQuote);
}
let output = document.querySelector("#output");
let generateForm = document.querySelector("#generateForm");
generateForm.addEventListener("submit", callApi);
