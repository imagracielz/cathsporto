//reveal animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("load", reveal);

function revealScroll() {
    var reveals = document.querySelectorAll(".revealScroll");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", revealScroll);

//fade in when scroll
function fadeIn(){
  const elements = document.querySelectorAll(".fadeTarget");

  for (var i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = elements[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      elements[i].classList.add("fadeIn");
      elements[i].classList.remove("fadeOut");
    } else {
      elements[i].classList.remove("fadeIn");
      elements[i].classList.add("fadeOut");
    }
  };
}

window.addEventListener("scroll", fadeIn)


//fade in left and right for article
function fadeInLeft(){
  const elements = document.querySelectorAll(".fadeArtLeft");

  for (var i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = elements[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      elements[i].classList.add("fadeInLeft");
      elements[i].classList.remove("fadeOut");
    } else {
      elements[i].classList.remove("fadeInLeft");
      elements[i].classList.add("fadeOut");
    }
  };
}

window.addEventListener("scroll", fadeInLeft)

function fadeInRight(){
  const elements = document.querySelectorAll(".fadeArtRight");

  for (var i = 0; i < elements.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = elements[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      elements[i].classList.add("fadeInRight");
      elements[i].classList.remove("fadeOut");
    } else {
      elements[i].classList.remove("fadeInRight");
      elements[i].classList.add("fadeOut");
    }
  };
}

window.addEventListener("scroll", fadeInRight)


//background change in projects title screen
const images = [
    '../assets/project-photos/pfik.png',
    '../assets/project-photos/1.png',
    '../assets/project-photos/2.png',
    '../assets/project-photos/3.png',
    '../assets/project-photos/4.png',
    '../assets/project-photos/6.png',
    '../assets/project-photos/7.jpeg',
    '../assets/project-photos/5.png'
];

let currentIndex = 0;
const projBG = document.querySelector('.projHomeBG');
const intervalTime = 3000;

function changeBackground() { // Set the new background image 
  projBG.style.backgroundImage = `url('${images[currentIndex]}')`; 
  
  // Move to the next image 
  currentIndex++; 
  // Reset the index if it exceeds the array length 
  if (currentIndex >= images.length) { 
    currentIndex = 0; 
  } 

}

  // initial load
changeBackground();

// change every 3 seconds
setInterval(changeBackground, intervalTime);

// video carousel
document.addEventListener('DOMContentLoaded', () => {

  const carousel = document.getElementById('projCarousel');
  const titleLink = document.getElementById('carouselLink');
  const text = document.getElementById('carouselText');

  function updateText(activeItem) {
    titleLink.textContent = activeItem.dataset.title;
    titleLink.href = activeItem.dataset.link;
    text.textContent = activeItem.dataset.text;
  }

  const firstItem = carousel.querySelector('.carousel-item.active');
  updateText(firstItem);

  carousel.addEventListener('slide.bs.carousel', () => {
    titleLink.style.opacity = 0;
    text.style.opacity = 0;
  });

  carousel.addEventListener('slid.bs.carousel', (e) => {
    updateText(e.relatedTarget);
    titleLink.style.opacity = 1;
    text.style.opacity = 1;
  });

});

//article animation on mobile
function handleArtAnimations() {
  const isMobile = window.innerWidth <= 720;
  const elements = document.querySelectorAll('.artText, .artPhoto');

  for (let i = 0; i < elements.length; i++) {
    if (isMobile) {
      elements[i].classList.remove('fadeArtLeft', 'fadeArtRight', 'fadeOut');
      elements[i].classList.add('revealScroll');
    } else {
      elements[i].classList.remove('revealScroll', 'active');

      //restore original direction if on desktop
      if (elements[i].classList.contains('order-md-1')) {
        elements[i].classList.add('fadeArtLeft');
      } else {
        elements[i].classList.add('fadeArtRight');
      }
    }
  }

  revealScroll();
}

window.addEventListener('scroll', revealScroll);
window.addEventListener('load', handleArtAnimations);
window.addEventListener('resize', handleArtAnimations);
