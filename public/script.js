if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then((reg) => {
      // console.log('service worker found', reg);
    });
  });
}

const parseKyobo = (inputString) => {
  const quote = inputString.split("\n\n \n\n ")[0].trim();
  const title = inputString
    .split("\n\n \n\n ")[1]
    .split("\n\n")[0]
    .replace(" 중에서", "");

  return {
    quote,
    title,
    date: new Date().toISOString(),
  };
};

window.addEventListener("DOMContentLoaded", () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  const rawText = parsedUrl.searchParams.get("text");
  console.log({ rawText });
  // if rawText not null-> execute function
  if (rawText) {
    const parsedQuote = parseKyobo(rawText);

    document.querySelector("#title-input").value = parsedQuote.title;
    document.querySelector("#quote-input").value = parsedQuote.quote;
  }
});
