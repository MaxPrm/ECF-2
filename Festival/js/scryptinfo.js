var slideIndexx = 0;

// Slider (information.html)
showSlides1();
function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("miniSlides3"); // Cible le mini slider
  for (i = 0; i < slides.length; i++) { // incrémentation de la prochaine image
    slides[i].style.display = "none"; // fait disparaitre l'image précédente
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1} // fait apparaitre l'image suivante
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides1, 5000); // Change l'image toute les 2 seconds
}

showSlides2();
function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("miniSlides4");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
}

showSlides3();
function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("miniSlides5");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides3, 5000); // Change image every 2 seconds
}

showSlides4();
function showSlides4() {
  var i;
  var slides = document.getElementsByClassName("miniSlides6");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides4, 5000); // Change image every 2 seconds
}

showSlides5();
function showSlides5() {
  var i;
  var slides = document.getElementsByClassName("miniSlides7");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides5, 5000); // Change image every 2 seconds
}

showSlides6();
function showSlides6() {
  var i;
  var slides = document.getElementsByClassName("miniSlides8");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides6, 5000); // Change image every 2 seconds
}

showSlides7();
function showSlides7() {
  var i;
  var slides = document.getElementsByClassName("miniSlides9");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides7, 5000); // Change image every 2 seconds
}

showSlides8();
function showSlides8() {
  var i;
  var slides = document.getElementsByClassName("miniSlides10");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides8, 5000); // Change image every 2 seconds
}

showSlides9();
function showSlides9() {
  var i;
  var slides = document.getElementsByClassName("miniSlides11");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides9, 5000); // Change image every 2 seconds
}

showSlides10();
function showSlides10() {
  var i;
  var slides = document.getElementsByClassName("miniSlides12");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {slideIndexx = 1}
  slides[slideIndexx-1].style.display = "block";
  setTimeout(showSlides10, 5000); // Change image every 2 seconds
}
