$(function(){
    $('.top-slider').slick({
        dots: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev.svg" alt="prev arrow"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./images/next.svg" alt="next arrow"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
           
            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
          }
        ]
      });
});

$(function(){
  $('.blackquote__slider').slick({
      dots: true, 
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./images/prev.svg" alt="prev arrow"></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./images/next.svg" alt="next arrow"></button>',
    });
});

const scrollUpArea = document.querySelector('.scroll-up');

scrollUpArea.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
})

const burgerMenu = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__menu');

burgerMenu.addEventListener("click", (e) => { 
  menu.classList.toggle('header__menu--active');
})

document.querySelectorAll('.header nav a').forEach(el => {
  el.addEventListener('click', () => {
    menu.classList.remove('header__menu--active');
  })
})