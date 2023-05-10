
// Button rules
let isGreen = false;

function changeBgColor() {
  if (!isGreen) {
    document.getElementById("main").style.backgroundColor = "green";
    isGreen = true;
  } else {
    document.getElementById("main").style.backgroundColor = ""; // or insert original color here
    isGreen = false;
  }
}

// Corosello rules

const images = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 3000);