const testString = `
시장 실패의 법칙으로부터 벗어날 방법은 없다. 여러분이 가지는 대부분의 아이디어는 시장으로부터 거절당할 것이고, 여러분은 상처를 입을 것이다. 하지만 이 책에 나오는 여러 도구와 전략들이 이런 불쾌하지만 불가피한 과정의 일부를 덜 고통스럽고, 더 빠르고, 더 쉽게 지나도록 해줄 것이다. 그러니 미루지 마라. 만약 여러분의 아이디어가 거절당할 운명이라면 나중보다는 지금 현실을 깨닫는 편이 낫

 

 아이디어 불패의 법칙 중에서

 교보eBook에서 자세히 보기 :
http://m.kyobobook.co.kr/digital/ebook/ebookContents.ink?barcode=4801189995561
`;

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

console.log("result", parseKyobo(testString));
console.log(JSON.stringify(testString));
