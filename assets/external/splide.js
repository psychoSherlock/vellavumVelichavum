//Splide
//Splide options
slideOptions = {
  cover: true,
  type: "loop",
  heightRatio: 0.5,
  autoplay: true,
  interval: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  speed: 1000,
  arrows: false
};

var elms = document.getElementsByClassName("splide");

// even class, we need a loop
document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[ i ], slideOptions).mount();
  }
});
