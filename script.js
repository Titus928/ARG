let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  if (slideIndex === 1 && n === -1) {
    // si on est à la première slide et qu'on veut aller en arrière, aller à la dernière slide
    showSlides(3);
  } else if (slideIndex === 3 && n === 1) {
    // si on est à la dernière slide et qu'on veut aller en avant, aller à la première slide
    showSlides(1);
  } else {
    showSlides(slideIndex += n);
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > 3) {slideIndex = 1} // passer à la première slide s'il y a plus de 3 slides
  if (n < 1) {slideIndex = 3} // passer à la dernière slide s'il y a moins de 1 slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
