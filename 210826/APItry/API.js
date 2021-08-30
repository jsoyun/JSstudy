$(document).ready(function () {
  $("#search").click(function () {
    let searchKeyword = $("#");
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v3/search/book?target=title",
      data: { query: $("#bookName").val() },
      headers: { Authorization: "KakaoAK eb67885b5025d37476f1084d3be0aa7e " },
    }).done(function (msg) {
      console.log(msg.documents[0].title);
      console.log(msg.documents[0].thumbnail);
      $("p").append("<strong>" + msg.documents[0].title + "</strong>");
      $("p").append("<img src='" + msg.documents[0].thumbnail + "'>");
    });
  });
});
