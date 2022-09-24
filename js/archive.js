// const renderQuote = (data) => {
//     const dateString = new Date(data.datetime).toLocaleDateString("ko-KR", {
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//     });
//     //먼저 datetime은 user friendly하게 보이도록 바꾸기

//     const html = `
//     <div class="w-full mx-auto rounded-lg bg-gray-100 shadow p-5 text-gray-800" style="max-width: 400px">
//         <div class="w-full flex mb-4">
//             <div class="flex-grow pl-3">
//                 <h6 class="font-bold text-md">${data.name}</h6>
//             </div>
//             <div class="w-9 text-right">
//                 <i class="mdi mdi-pencil text-gray-400 text-3xl"></i>
//             </div>
//             <div class="w-6 text-right">
//             <i class="mdi mdi-delete text-gray-400 text-3xl"></i>
//         </div>
//         </div>
//         <div class="w-full mb-4">
//             <p class="text-sm">${data.content}</p>
//         </div>
//         <div class="w-full">
//             <p class="text-xs text-gray-500 text-right">${dateString}</p>
//         </div>
//     </div>
//     `;
//     document.querySelector(".quotes").innerHTML += html;
//   };
