// Slide Show Gallery start
let slideIndex = 1;

// show default as first image
showsSlides(slideIndex);

// prev next btn control
function plusSlides(n) {
  showsSlides((slideIndex += n));
}

// thumbnail and dots images control
function currentSlide(n) {
  showsSlides((slideIndex = n));
}

function showsSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let slideArr = Array.from(slides);

  let thumbImg = document.querySelectorAll(".thumbImg");
  let thumbArr = Array.from(thumbImg);

  let indexNum = document.querySelectorAll(".indexNum");
  let indexNumArr = Array.from(indexNum);

  let dots = document.querySelectorAll(".dots");
  let dotsArr = Array.from(dots);

  let caption = document.querySelector("#caption");

  if (n < 1) {
    slideIndex = slideArr.length;
  }
  if (n > slideArr.length) {
    slideIndex = 1;
  }

  slideArr.map((slideitems) => {
    slideitems.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("slide-anim");

  thumbArr.map((thumbItems) => {
    thumbItems.className = thumbItems.className.replace(" active", "");
  });
  thumbArr[slideIndex - 1].className += " active";

  // Caption text changing
  caption.innerHTML = thumbArr[slideIndex - 1].alt;

  // dinamic index number
  indexNumArr.map((indexnumItems) => {
    indexnumItems.textContent = slideIndex;
  });
  // dot active
  dotsArr.map((dotItems) => {
    dotItems.className = dotItems.className.replace(" active", "");
  });
  dotsArr[slideIndex - 1].className += " active";
}

// autoplay option
// if you dont want auto play option just dont copy this
// setInterval(() => {
//   plusSlides(1);
// }, 1500);

// // keyboard handler start
// // next
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    plusSlides(1);
  }
});
// prev
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    plusSlides(-1);
  }
});
// Slide Show Gallery end
