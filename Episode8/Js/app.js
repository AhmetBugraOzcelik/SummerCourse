// $('#boxs-dersler').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     centerMode: true,
//     adaptiveHeight: true,
//     centerPadding: '40px',
//     variableWidth: true
//   });

  $('#boxs-dersler').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });