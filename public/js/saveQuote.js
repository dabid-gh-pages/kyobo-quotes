document.querySelector("#save-button").onclick = function () {
  let title = document.querySelector("#title-input").value;
  let quote = document.querySelector("#quote-input").value;
  let dateTime = new Date().toISOString();
  console.log(title, quote);
  if (title && quote) {
    const quoteObject = {
      title,
      quote,
      dateTime,
    };
    saveQuote(quoteObject);
  }
};
