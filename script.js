if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then((reg) => {
      // console.log('service worker found', reg);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  const a = "Title shared: " + parsedUrl.searchParams.get("title");
  const b = "Text shared: " + parsedUrl.searchParams.get("text");
  const c = "URL shared: " + parsedUrl.searchParams.get("url");

  document.querySelector("#test-div").value = [a, b, c].join("\n");
});
