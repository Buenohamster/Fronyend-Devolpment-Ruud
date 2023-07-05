var currentSlide = currentArrayIndex + 1;
var currentArrayIndex = 0;

var currentCarouselPosition = 0;

var backButtonCarousel = document.querySelector("main section:nth-of-type(3) section:nth-of-type(2) ul:nth-of-type(2) a:nth-of-type(1)");
var nextButtonCarousel = document.querySelector("main section:nth-of-type(3) section:nth-of-type(2) ul:nth-of-type(2) a:nth-of-type(2)");

var showAllButton = document.querySelector("main section:nth-of-type(4) > ul:nth-of-type(1) li:nth-of-type(1) a");
var innovatieButton = document.querySelector("main section:nth-of-type(4) > ul:nth-of-type(1) li:nth-of-type(2) a");
var itManagementButton = document.querySelector("main section:nth-of-type(4) > ul:nth-of-type(1) li:nth-of-type(3) a");
var projectManagementButton = document.querySelector("main section:nth-of-type(4) > ul:nth-of-type(1) li:nth-of-type(4) a");
var consultancyButton = document.querySelector("main section:nth-of-type(4) > ul:nth-of-type(1) li:nth-of-type(1) a");

backButtonCarousel.addEventListener("click", function() {
    carousel("back");
});

nextButtonCarousel.addEventListener("click", function() {
    carousel("next");
});

showAllButton.addEventListener("click", function() {
    filter("showAll");
});

innovatieButton.addEventListener("click", function() {
    filter("innovatie");
});

itManagementButton.addEventListener("click", function() {
    filter("itManagement");
});

projectManagementButton.addEventListener("click", function() {
    filter("projectManagement");
});

consultancyButton.addEventListener("click", function() {
    filter("consultancy");
});


var navHamburgerMenuIcon = document.querySelector("nav > a:last-of-type");
navHamburgerMenuIcon.addEventListener("click", function() {
    showNavHamburgerMenu();
});

function showNavHamburgerMenu() {
    var navLinks = document.querySelector("nav ul");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
    console.log("showNavHamburgerMenu");
}

function headerSlider() {
    var allHeaderSlides = document.querySelectorAll("header section ul li");
    
    // console.log("loopie");
    
    if (currentArrayIndex == 3) {
      // allHeaderSlides[currentArrayIndex -1].classList.remove("currentSlide");
      currentArrayIndex = 0;
    }

    allHeaderSlides[currentArrayIndex].classList.remove("currentSlide");


    if (currentArrayIndex == 0) {
      allHeaderSlides[allHeaderSlides.length -1].classList.remove("currentSlide");
      allHeaderSlides[currentArrayIndex].classList.add("currentSlide");
    }
    if (currentArrayIndex == 1) {
      allHeaderSlides[currentArrayIndex -1].classList.remove("currentSlide");
      allHeaderSlides[currentArrayIndex].classList.add("currentSlide");
    }
    if (currentArrayIndex == 2) {
      allHeaderSlides[currentArrayIndex -1].classList.remove("currentSlide");
      allHeaderSlides[currentArrayIndex].classList.add("currentSlide");
    }
    
    currentArrayIndex++;
   
    setTimeout(headerSlider, 8000);
}

function carousel(direction) {

    if (direction == "back") {
      if (currentCarouselPosition == 0) {
        currentCarouselPosition = -200;
      } else { 
        currentCarouselPosition = currentCarouselPosition + 100;
      }
    } 
    if (direction == "next") {
      if (currentCarouselPosition == -200) {
        currentCarouselPosition = 0;
      } else {
        currentCarouselPosition = currentCarouselPosition - 100;
      }
    }
    
    document.documentElement.style.setProperty('--newSlideAmount', currentCarouselPosition + "%");
}

function filter(selectedFilter) {
    if (selectedFilter == "showAll") {
      document.getElementsByClassName("innovatie").classList.add("hidden");
      console.log("showAll");





      
    }
}

