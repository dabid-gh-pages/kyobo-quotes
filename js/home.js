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
      date: new Date().toISOString(),
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
    console.log({ request });
    document.querySelector(".quotes").innerHTML = request.result
      .map((data) => {
        return `
        <div class="w-full mx-auto rounded-lg bg-gray-100 shadow p-5 text-gray-800" style="max-width: 400px">
            <div class="w-full flex mb-4">
                <div class="flex-grow pl-3">
                    <h6 class="font-bold text-md">${data.title}</h6>
                </div>
                <div class="w-9 text-right">
                    <i class="mdi mdi-pencil text-gray-400 text-3xl"></i>
                </div>
                <div class="w-6 text-right">
                <i class="mdi mdi-delete text-gray-400 text-3xl"></i>
            </div>
            </div>
            <div class="w-full mb-4">
                <p class="text-sm">${data.quote}</p>
            </div>
            <div class="w-full">
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
  getReq.onerror = (err) => {
    console.warn(err);
  };
};
