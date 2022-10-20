let globalStore = {};


//  globalStore.localArray = array from local storage
// globalStore.filteredArray = array after filtering

window.addEventListener("DOMContentLoaded", () => {
  // dom content loaded when shared

  const parseKyobo = (inputString) => {
    const quote = inputString.split("\n\n \n\n ")[0].trim();
    const title = inputString
      .split("\n\n \n\n ")[1]
      .split("\n\n")[0]
      .replace(" 중에서", "");

    return {
      quote,
      title,
    };
  };

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

// rendering quotes array -> when using the data, we need to open again
document.querySelector('#tabs a[href="#second"]').onclick = function () {
  console.log("search-tab clicked");

  let tx = makeTX("quotes", "readonly");
  tx.oncomplete = (ev) => {
    //transaction for reading all objects is complete
  };
  let store = tx.objectStore("quotes");
  let getReq = store.getAll();
  //returns an array
  //option can pass in a key or a keyRange
  getReq.onsuccess = (ev) => {
    //getAll was successful
    let request = ev.target; //request === getReq === ev.target
    console.log(request);

    // store to global object
    globalStore.localArray = request.result;
    console.log(globalStore.localArray)
    renderQuotes(request.result);
  };
  getReq.onerror = (err) => {
    console.warn(err);
  };
};
