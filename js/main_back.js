$(function() {
  var $ypos = $(window).scrollTop();

  var docHeight = $(document).height();
  var windowHeight = $(window).height();

  var $homeBtn = $('#homeBtn');
  var $aboutBtn = $('#aboutBtn');
  var $portfolioBtn = $('#portfolioBtn');
  var $contactBtn = $('#contactBtn');

  var $menu = $('#menu');
  var $header = $('#header');
  var $intro = $('#intro');
  var $about = $('#about');
  var $aboutPos = $about.offset().top;
  var $portfolio = $('#portfolio');
  var $portfolioPos = $portfolio.offset().top;
  var $contact = $('#contact');
  var $contactPos = $contact.offset().top;

  var $topSocialLinks = $('#top-social-links');

  function windowReady(){

    var windowWidth = $(window).width();

    if (windowWidth < 768 ) {
      $menu.removeClass('tablet-menu');
      $menu.addClass('mobile-menu');
    } else if ((windowWidth >= 768 ) && (windowWidth < 970)) {
      $menu.removeClass('mobile-menu');
      $menu.addClass('tablet-menu');
    } else if (windowWidth < 1200) {
      $topSocialLinks.hide();
      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } else if (windowWidth > 1210) {
      $topSocialLinks.fadeIn("slow");
      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } else {
      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } 
  }//resize event

  function windowResize(){

    var mobileMenu = $('.mobile-menu');
    var tabletMenu = $('.tablet-menu');
    var windowWidth = $(window).width();

    if (windowWidth < 768 ) {
      $menu.removeClass('tablet-menu');
      $menu.addClass('mobile-menu');
    } else if ((windowWidth >= 768 ) && (windowWidth < 970)) {
      $menu.removeClass('mobile-menu');
      $menu.addClass('tablet-menu');
    } else if (windowWidth < 1200) {
      $topSocialLinks.hide();

      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } else if (windowWidth > 1210) {
      $topSocialLinks.fadeIn("slow");
      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } else {
      $menu.removeClass('mobile-menu');
      $menu.removeClass('tablet-menu');
    } 
  }//resize event



  $homeBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: (0)
    }, 2000);
    return false;
  });//homeBtn Click

  $aboutBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: ($aboutPos - 100)
    }, 2000);
    return false;
  });//aboutBtn Click

  $portfolioBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: ($portfolioPos - 100)
    }, 2000);
    return false;
  });//portfolioBtn Click

  $contactBtn.on('click', function() {
    $('html, body').animate({
      scrollTop: ($contactPos - 100)
    }, 2000);
    return false;
  });//contactBtn Click

  function Scroll(){

    var ypos = $(window).scrollTop();

    if(ypos > 500) {
      $header.height("100px");
    }
    else{
      $header.height("600px");
    } //Shader

    if (ypos > 400) {
      $intro.fadeOut(300);
    }
    else{
      $intro.fadeIn(500);
    } //Intro Fade  

    if ((ypos >= 0) && (ypos <= 590)) {
      $homeBtn.addClass('active-menu-btn');
    } else {
      $homeBtn.removeClass('active-menu-btn');
    }

    if ((ypos >= 1000) && (ypos <= 1570)) {
      $aboutBtn.addClass('active-menu-btn');
    } else {
      $aboutBtn.removeClass('active-menu-btn');
    }

    if ((ypos >= 1850) && (ypos <= 2500)) {
      $portfolioBtn.addClass('active-menu-btn');
    } else {
      $portfolioBtn.removeClass('active-menu-btn');
    }

    if( ypos + windowHeight == docHeight) {
      $contactBtn.addClass('active-menu-btn');
    } else {
      $contactBtn.removeClass('active-menu-btn');
    }

  }
  window.addEventListener("scroll",Scroll);
  window.addEventListener('load', windowReady);
  window.addEventListener('resize', windowResize);

});//ready