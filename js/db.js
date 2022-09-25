//helper function
function makeTX(storeName, mode) {
  let tx = db.transaction(storeName, mode);
  tx.onerror = (err) => {
    console.warn(err);
  };
  return tx;
}

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
  db.createObjectStore("quotes", { keyPath: "id" });
};

request.onsuccess = (event) => {
  db = event.target.result;
};

request.onerror = (event) => {
  console.log(event.target.errorCode);
};
//db save functions

function saveQuote(quote) {
  const transaction = db.transaction(["quotes"], "readwrite");
  const store = transaction.objectStore("quotes");
  store.add(quote);
}
