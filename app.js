let text = document.getElementById('main-header');
let background = document.getElementById('background');
let birds = document.getElementById('birds');
let mbs = document.getElementById('mbs');
let leftHdb = document.getElementById('left-hdb');
let rightHdb = document.getElementById('right-hdb');
let merlion = document.getElementById('merlion');
let oldman = document.getElementById('oldman');
let girl = document.getElementById('girl');
let boy = document.getElementById('boy');
let leftPlants = document.getElementById('left-plants');
let rightPlants = document.getElementById('right-plants');
let growPlants = document.getElementById('grow-plants');
let headerContainer = document.querySelector('.header-container');
let lineContainer = document.querySelector('.container-child');

window.addEventListener('scroll', ()=> {
  let value = window.scrollY;
  // text.style.top = 150 + value * -0.5 + 'px';
  birds.style.top = value * -1 + 'px';
  mbs.style.top = 220 + value * -.7 + 'px';
  growPlants.style.top = 400 + value * -.52 + 'px';
  leftHdb.style.top = value * -.1 + 'px';
  leftHdb.style.left = value * -.1 + 'px';
  rightHdb.style.top = value * -.1 + 'px';
  rightHdb.style.left = value * .1 + 'px';
  merlion.style.top = value * -0.2 + 'px';
  oldman.style.left = value * -0.2 + 'px';
  girl.style.left = value * -0.4 + 'px';
  boy.style.left = value * 0.4 + 'px';
  // leftPlants.style.top = value * -0.4 + 'px';
  leftPlants.style.left = value * -0.2 + 'px';
  // rightPlants.style.top = value * -0.4 + 'px';
  rightPlants.style.left = value * 0.2 + 'px';
  headerContainer.style.opacity = 1 - value * 0.05;
  lineContainer.style.opacity = 0 + value * 0.0009;
});

// content line

console.log(window.scrollY);
window.addEventListener('scroll', ()=> {
  const contentCounter = document.querySelector('.top-number')
  let counter = 1
  if ((window.scrollY / 826) <= 1){
    contentCounter.innerHTML = 1;
  } else{
    contentCounter.innerHTML = Math.round(window.scrollY / 826);
  }

})

// works JS

let workSections = document.querySelectorAll('.work-sections')
let workSection = document.querySelector('.work-sections')
let line1 = document.querySelectorAll('.works-header-line1');
let line2 = document.querySelectorAll('.works-header-line2');
let line3 = document.querySelectorAll('.works-header-line3');


window.addEventListener('scroll', checkSections);

function checkSections(){

  workSections.forEach(section =>{
    const sectionTop = section.getBoundingClientRect().top

    if(sectionTop < 200){
      section.children[0].children[0].classList.add('show')
    }
    else{
      section.children[0].children[0].classList.remove('show')
    }
    if(sectionTop < 150){
      section.children[0].children[1].classList.add('show')
    }
    else{
      section.children[0].children[1].classList.remove('show')
    }
    if(sectionTop < 100){
      section.children[0].children[2].classList.add('show')
    }
    else{
      section.children[0].children[2].classList.remove('show')
    }
    if(sectionTop < 150){
      section.children[1].children[0].classList.add('show')
    }
    else{
      section.children[1].children[0].classList.remove('show')
    }
  })
}

let slideIndex = [1,1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
let dotsId = ["dot1", "dot2", "dot3", "dot4", "dot5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
// showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotsId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex[no]-1].className += " active";
}
