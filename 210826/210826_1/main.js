//주소를 먼저 넣어줘야함 절대 안바뀜(절대바뀌지 않는 상수값 보통 대문자씀)

const API_URL = "https://floating-harbor-78336.herokuapp.com/fastfood";

$(function () {
  $(".btn-search").click(function () {
    let searchKeyword = $("#txt-search").val();

    search(searchKeyword);
  });
});

function search(params) {
  $.get(API_URL, {}, function (data) {
    //console.log(data);
    let list = data.list;
    let total = data.total;
    $(".total").html("총" + total + "개의 패스트푸드점을 찾음");

    const $list = $(".list");
    for (let i = 0; i < list.length; i++) {
      let item = list[1]; //아이템에 엘리먼트 생성.템플릿이라는 개념도입.돔엘리먼트에 직접넣는 방식
      //단순..템플릿 무용자(?) 뭔가를 찍어내.. 동일한 모양의 반복이 사용될때 용이하게 쓸수있
      let $elem = $("#item-template").clone().removeAttr("id"); //클론,복제해서 더이상 템플릿이 아니라서 리무브로 지워버림.
      $elem.find(".item-no").html(i + 1);
      $elem.find(".item-name").html(item.name);
      $elem.find(".item-addr").html(item.addr);

      $list.append($elem);
    }
  });
}
