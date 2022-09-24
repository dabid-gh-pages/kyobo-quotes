// loads  the quotes

const quotes = document.querySelector(".quotes");

//input is quotes from db, the date is isostring
document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    {
      id: 1,
      name: "아이디어 불패의 법칙",
      content: "전략 1 : 생각은 글로벌하게, 테스트는 로컬하게",
      datetime: "2022-09-24T01:19:53.184Z",
    },
    {
      id: 2,
      name: "아이디어 불패의 법칙",
      content:
        "대부분의 신제품이 실패하는 것은 설계나 개발, 마케팅이 허술해서가 아니라 그냥 그 제품이 시장이 원하는 제품이 아니기 때문이다",
      datetime: "2022-09-24T01:19:53.184Z",
    },

    {
      id: 3,
      name: "아이디어 불패의 법칙",
      content:
        "그렇다 해도 여러분의 실행이 어설프거나, 경쟁자가 여러분보다 더 잘 실행에 옮긴다면 결국 여러분이 실패할 수도 있다. 하지만 ‘안 될 놈’을 쥐고 있을 때의 확률에 비하면 이는 어마어마한 비교 우위다. 말이 나왔으니 말인데, ‘안 될 놈’을 한번 보고 가자.",
      datetime: "2022-09-24T01:19:53.184Z",
    },
    {
      id: 4,
      name: "아이디어 불패의 법칙",
      content:
        "시장 실패의 법칙으로부터 벗어날 방법은 없다. 여러분이 가지는 대부분의 아이디어는 시장으로부터 거절당할 것이고, 여러분은 상처를 입을 것이다. 하지만 이 책에 나오는 여러 도구와 전략들이 이런 불쾌하지만 불가피한 과정의 일부를 덜 고통스럽고, 더 빠르고, 더 쉽게 지나도록 해줄 것이다. 그러니 미루지 마라. 만약 여러분의 아이디어가 거절당할 운명이라면 나중보다는 지금 현실을 깨닫는 편이 낫다.",
      datetime: "2022-09-24T01:19:53.184Z",
    },
  ];
  quotes.forEach((quote) => renderQuote2(quote));
});

// render recipe data (input is object)
const renderQuote = (data) => {
  const dateString = datetime.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  //먼저 datetime은 user friendly하게 보이도록 바꾸기

  const html = `
    <div class="card-panel recipe white row" data-id="${data.id}">
      <img src="/img/dish.png" alt="recipe thumb">
      <div class="recipe-details">
        <div class="recipe-title">${data.name}</div>
        <div class="recipe-ingredients">${data.content}</div>
      </div>
      <div class="recipe-delete">
        <i class="material-icons" data-id="${data.id}">delete_outline</i>
      </div>
    </div>
  `;
  quotes.innerHTML += html;
};

// render recipe data (input is object)
const renderQuote2 = (data) => {
  const dateString = new Date(data.datetime).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  //먼저 datetime은 user friendly하게 보이도록 바꾸기

  const html = `
    <div class="w-full mx-auto rounded-lg bg-gray-100 shadow p-5 text-gray-800" style="max-width: 400px">
        <div class="w-full flex mb-4">
            <div class="flex-grow pl-3">
                <h6 class="font-bold text-md">${data.name}</h6>
            </div>
            <div class="w-9 text-right">
                <i class="mdi mdi-pencil text-gray-400 text-3xl"></i>
            </div>
            <div class="w-6 text-right">
            <i class="mdi mdi-delete text-gray-400 text-3xl"></i>
        </div>
        </div>
        <div class="w-full mb-4">
            <p class="text-sm">${data.content}</p>
        </div>
        <div class="w-full">
            <p class="text-xs text-gray-500 text-right">${dateString}</p>
        </div>
    </div>
    `;
  quotes.innerHTML += html;
};
