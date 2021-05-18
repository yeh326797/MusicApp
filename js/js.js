var button = $(".play-btn");

//播放鍵切換
button.on("click", function () {
  button.toggleClass("active");
  $("#cover").find("img").toggleClass("active");
});

//音軌
var allTruck = document.querySelectorAll(".track");
var index = 0;
var animation;

button.on("click", () => {
  if (button.hasClass("active")) {
    animation = setInterval(() => {
      allTruck[index].classList.add("black");
      index = index + 1;
    }, 1000);
  } else {
    clearInterval(animation);
  }
});

//我的最愛

var blueHeart = $(".blue-heart");
var redHeart = $(".heart");

blueHeart.on("click", function () {
  blueHeart.toggleClass("check");
});

redHeart.on("click", function () {
  redHeart.toggleClass("check");
});
 
 