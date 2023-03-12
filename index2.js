let slideIndex = 0;
let slideIn = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length)  {
    slideIndex = 1  }

  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}
