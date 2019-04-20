$('.scroll').slick({
	autoplay:true,
	dots:true,
	speed:1000,
});
$('.scroll-footer').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed:600,
  dots: false,	
  arrows: false,
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});