var button = $(".play-btn");

button.on("click", function () {
  button.toggleClass("active");
  $("#cover").find("img").toggleClass("active");
});




var allTruck = document.querySelectorAll(".track");
let index = 0;
let animation;

button.on("click", () => {
  if (button.hasClass("active")) {
    animation = setInterval(() => {
      allTruck[index].classList.add('black');
      index = index + 1;
    }, 1000);
  } else {
    clearInterval(animation);
  }
});


  