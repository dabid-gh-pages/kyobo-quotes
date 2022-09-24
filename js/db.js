// db configuration
// add new quote

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((reg) => {
      // console.log('service worker found', reg);
    });
  });
}
let db;
let quotesArray;
const request = indexedDB.open("kyobo", 1, (updradedDb) => {
  if (!updradedDb.objectStoreNames.contains("quotes")) {
    updradedDb.createObjectStore("quotes");
  }
});

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("quotes", { autoIncrement: true });
};

request.onsuccess = (event) => {
  db = event.target.result;
  quotesArray = getAllQuotes();
};

request.onerror = (event) => {
  console.log(event.target.errorCode);
};
//db save functions

function saveQuote(quote) {
  const transaction = db.transaction(["quote"], "readwrite");
  const store = transaction.objectStore("quote");
  store.add(quote);
}

// db read function

// transaction -> prepare to read / or write
// objectStore -> getting the actual table
function getAllQuotes() {
  console.log({ db });
  const request = db.transaction("quotes").objectStore("quotes").getAll();

  request.onsuccess = () => {
    const quotes = request.result;

    console.log("Got all the quotes");
    console.table(quotes);

    return quotes;
  };

  request.onerror = (err) => {
    console.error(`Error to get all quotes: ${err}`);
  };
}
