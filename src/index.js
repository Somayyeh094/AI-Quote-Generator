function generateQuote(response) {
  console.log(response.data.answer);
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
    "Please generate inspirational and motivational quotes which are short sentences. Each quote is placed within double quotation marks. write each quote like this format: quote<br/>. Give a number to each quote";
  let prompt = `generate qoutes about ${quoteInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let output = document.querySelector("#output");
  output.innerHTML = `Generating quotes about "${quoteInput.value}"`;
  axios.get(apiUrl).then(generateQuote);
}
let generateForm = document.querySelector("#generateForm");
generateForm.addEventListener("submit", callApi);
