// save button
document.querySelector("#save-button").onclick = function () {
  let title = document.querySelector("#title-input").value;
  let quote = document.querySelector("#quote-input").value;
  let dateTime = new Date().toISOString();
  console.log(title, quote);
  if (title && quote) {
    const quoteObject = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      title,
      quote,
      dateTime,
    };
    saveQuote(quoteObject);
  }
};

// search button
document.querySelector("#search-button").onclick = function () {
  let keyword = document.querySelector("#search-input").value;

  // filter by keyword
  let filterdArray = globalObject.filter((item) =>
    item.title.includes(keyword)
  );
  // render only the filtered array
  renderQuotes(filterdArray);

  // change the global array variable
  globalObject = filterdArray;
  toShareString(globalObject);
};

// share button -> share the globalarray as string

const toShareString = (data) => {
  // 먼저 같은 제목끼리 묶기
  books = data.reduce((acc, d) => {
    if (Object.keys(acc).includes(d.title)) return acc;

    acc[d.title] = data.filter((g) => g.title === d.title);
    return acc;
  }, {});

  let finalString = "";
  for (title in books) {
    finalString =
      finalString +
      title +
      "\n\n" +
      books[title].map((quoteItem) => quoteItem.quote).join("\n");
  }
  return finalString;
};

document.querySelector("#share-button").addEventListener("click", async () => {
  const title = "hello";
  const text = toShareString(globalObject);
  const url = null;
  const data = { title, text, url };

  try {
    await navigator.share(data);
  } catch (e) {
    console.log("share error", e);
  }
});
