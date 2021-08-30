let map;

$(function () {
  let id = parseId(window.location.search);
  console.log("id", id);
  getDetail(id);
  showMap();
});
function showMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: {
      lat: 33.3617,
      lng: 126.5292,
    },
  });
}

function showMarker(lat, lng) {
  new google.maps.Marker({
    position: {
      lat: lat,
      lng: lng,
    },
    map: map,
  });
}

function getDetail(id) {
  const URL = "https://javascript-basic.appspot.com/searchLocation";
  $.getJSON(URL, { id: id }, function (r) {
    console.log(r);
    $(".detail-header-name").html(r.name);
    $(".detail-header-name").html(r.cityName);
    $(".detail-desc-text").html(r.desc);

    let $gallery = $("#detail-images");
    let images = r.subImageList;

    for (let i = 0; i < images.length; i++) {
      let $image = $('<img src="' + images[i] + '"/>');
      $gallery.append($image);
    }
    Galleria.loadTheme("libs/galleria/themes/classic/galleria.classic.min.js");
    Galleria.run("#detail-images");

    showMarker(r.position.x, r.position.y);
    $(".btn-register").click(function () {
      let myTrips = Cookies.getJSON("MYTRIPS");
      if (!myTrips) {
        myTrips = [];
      }
      myTrips.push;
    });
    let list = [1, 2, 3, 4, 5];
    document.cookie = "list=" + JSON;
  });
}

function parseId(str) {
  let s = str.substring(1);
  let args = s.split("&");

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    let tokens = arg.split("=");

    if (tokens[0] === "id") {
      return tokens[1];
    }
  }
  return null;
}
