// remove a quote
document.querySelector(".quotes").addEventListener("click", (evt) => {
  if (evt.target.classList.contains("mdi-delete")) {
    const key = evt.target.getAttribute("data-id");
    //console.log(id);
    console.log({ key });
    // 1) remove from page
    const targetQuote = document.querySelector(`.quote[data-id="${key}"]`);
    console.log(targetQuote);
    targetQuote.remove();

    // 2) delete from index
    let tx = makeTX("quotes", "readwrite");
    tx.oncomplete = (ev) => {
      //transaction for reading all objects is complete
    };
    let store = tx.objectStore("quotes");
    let getReq = store.delete(key);

    // 3) remove from localarray object
    globalStore.localArray = globalStore.localArray.filter(item => {
      return item.id !== key
    })

    //returns an array
    //option can pass in a key or a keyRange
    getReq.onsuccess = (ev) => {
      console.log("successfully deleted an object");
    };
    getReq.onerror = (err) => {
      console.warn(err);
    };
  }
});

//input is array of quote objects
const renderQuotes = (quoteArray) => {
  document.querySelector(".quotes").innerHTML = quoteArray
    .map((data) => {
      return `
      <div class="quote w-full mx-auto rounded-lg bg-gray-100 shadow p-5 text-gray-800" data-id="${data.id
        }" style="max-width: 400px">
          <div class="w-full flex mb-4">
              <div class="flex-grow">
                  <h6 class="font-bold text-md">${data.title}</h6>
              </div>

              <div class="w-6 text-right">
              <i class="mdi mdi-delete text-gray-400 text-3xl"  data-id="${data.id
        }"></i>
          </div>
          </div>
          <div class="w-full mb-4">
              <p class="text-sm">${data.quote}</p>
          </div>
          <div class="flex justify-between">
          <p class="text-sm text-blue-600">${data.tag || ""}</p>        
              <p class="text-xs text-gray-500 text-right">${new Date(
          data.dateTime
        ).toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}</p>
          </div>
      </div>
      `;
    })
    .join("\n");
};
