// 1. 함수 선언 방법
// function name이름지정(params) {
//     body
//     return; //안써도 있는 거야.
// }
// //하나의 함수는 한가지 일만 하도록 만들어야해!!
// //함수 이름작성할때는 동사형태로 지으면 좋다.
// //funtion is object in JS

function practice(message) {
  console.log(message);
}
practice("가보자고");
/////
function changename(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changename(ellie);
console.log(ellie);
