// $('.image-slides').slick({
//   dots: true,
//   infinite: true,
//   Speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   autoplay: true,
//   autoplaySpeed: 2000
// });

$('.photo-gallery').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2250,
  asNavFor: '.photo-nav'
});
$('.photo-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.photo-gallery',
  centerMode: true,
  focusOnSelect: true
});