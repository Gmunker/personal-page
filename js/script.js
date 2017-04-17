const docHeight = document.body.scrollHeight;
const windowHeight = window.innerHeight;

const homeButton = document.getElementById('homeBtn');
const aboutButton = document.getElementById('aboutBtn')
const portfolioButton = document.getElementById('portfolioBtn');
const contactButton = document.getElementById('contactBtn');

const menu = document.getElementById('menu');
const header = document.getElementById('header');
const about = document.getElementById('about');
const intro = document.getElementById('intro');
const contact = document.getElementById('contact');

const aboutPOS = about.offsetTop - 150;
const portfolioPOS = portfolio.offsetTop - 150;
const contactPOS = contact.offsetTop -150;

var buttons = document.getElementsByClassName('btn');
// var newButtons = new Array(document.getElementsByClassName('btn'));
// console.log(newButtons[0])

let scrollPos = 0;

window.addEventListener('scroll', function() {
  scrollPos = window.scrollY;
});


// document.addEventListener("DOMContentLoaded", function() {


// function windowReady () {



function btnSelector(id) {

  switch (id) {
    case "homeBtn":
      scrollEffect(150);
    break;      
    case "aboutBtn":
      scrollEffect(950);
    break;
    case "portfolioBtn":
      scrollEffect(Math.round(portfolio.offsetTop - 150));
    break;
    case "contactBtn":
      scrollEffect(contact.offsetTop);
    break;
  }
}

let speed = 5;
let scroller = null;

function scrollEffect(target) {
  if (scrollPos <= target) {
    scrollEffectDown(target);
  } else {
    scrollEffectUp(target);
  }
}

function scrollEffectDown(target) {
  scroller = setTimeout(function() {
    scrollEffectDown(target);
  }, 1);

  if (scrollPos >= target) {
     clearTimeout(scroller);
    } else {
      scrollPos = scrollPos + speed;
    }
  window.scroll(0, scrollPos);
}

function scrollEffectUp(target) {
  scroller = setTimeout(function() {
    scrollEffectUp(target);
  }, 1);

  if (scrollPos <= target) {
     clearTimeout(scroller);
    } else {
      scrollPos = scrollPos - speed;
    }
  window.scroll(0, scrollPos);
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    btnSelector(this.id);
  });
};















//let buttons = button.map(function(btn) {btn})

//console.log(buttons);

  // button..addEventListener('click', function () {
  //   console.log("fuck off")
  // });

// }

// window.addEventListener('scroll', () => {
//   console.log(about.scrollTop)
// })




  // // window.addEventListener("scroll", Scroll);
  // window.addEventListener('load', windowReady());
  // window.addEventListener('resize', windowResize);


// $(function() {

//   function windowReady(){

//     var windowWidth = $(window).width();


//   $homeBtn.on('click', function() {
//     $('html, body').animate({
//       scrollTop: (0)
//     }, 2000);
//     return false;
//   });//homeBtn Click

//   $aboutBtn.on('click', function() {
//     $('html, body').animate({
//       scrollTop: ($aboutPos - 100)
//     }, 2000);
//     return false;
//   });//aboutBtn Click

//   $portfolioBtn.on('click', function() {
//     $('html, body').animate({
//       scrollTop: ($portfolioPos - 100)
//     }, 2000);
//     return false;
//   });//portfolioBtn Click

//   $contactBtn.on('click', function() {
//     $('html, body').animate({
//       scrollTop: ($contactPos - 100)
//     }, 2000);
//     return false;
//   });//contactBtn Click











//   function Scroll(){

//     var ypos = $(window).scrollTop();

//     if(ypos > 500) {
//       $header.height("100px");
//     }
//     else{
//       $header.height("600px");
//     } //Shader

//     if (ypos > 400) {
//       $intro.fadeOut(300);
//     }
//     else{
//       $intro.fadeIn(500);
//     } //Intro Fade  

//     if ((ypos >= 0) && (ypos <= 590)) {
//       $homeBtn.addClass('active-menu-btn');
//     } else {
//       $homeBtn.removeClass('active-menu-btn');
//     }

//     if ((ypos >= 1000) && (ypos <= 1570)) {
//       $aboutBtn.addClass('active-menu-btn');
//     } else {
//       $aboutBtn.removeClass('active-menu-btn');
//     }

//     if ((ypos >= 1850) && (ypos <= 2500)) {
//       $portfolioBtn.addClass('active-menu-btn');
//     } else {
//       $portfolioBtn.removeClass('active-menu-btn');
//     }

//     if( ypos + windowHeight == docHeight) {
//       $contactBtn.addClass('active-menu-btn');
//     } else {
//       $contactBtn.removeClass('active-menu-btn');
//     }

//   }


// });//ready