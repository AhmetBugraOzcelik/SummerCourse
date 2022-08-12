AOS.init();

var details = [...document.querySelectorAll('details')];
document.addEventListener('click', function(e){
  if(details.some(f => f.contains(e.target)).length != 0){
    details.forEach(f => f.removeAttribute('open'));
  }
})


// $('.boxs').slick({
//   infinite: true,
//   dots: true,
//   slidesToShow: 3,
//   slidesToScroll: 1
// });

$('.boxs').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 726,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/* Burger Animation */

const menuBtn = document.querySelector('.burger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }

  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navMenu = document.querySelector("#nav-items");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
