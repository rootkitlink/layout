$(function(){

  $('.slider, .news__slider-inner').slick({
    prevArrow: '<button type="button" class="slick-prev prev-btn"></button>',
    nextArrow: '<button type="button" class="slick-next next-btn"></button>',
    infinite: false
  });

  $('select').styler();

  $('.menu__burger').on('click', function(){
  $('.menu ul').slideToggle();
  })
});