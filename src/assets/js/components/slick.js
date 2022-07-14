let portfolio = $('#portfolio');

portfolio.slick({
	arrows: false,
	dots: true,
	speed: 800,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true
});

$('#portfolio-arrow-prev').on('click', function (event) {
	event.preventDefault();
	portfolio.slick('slickPrev');
});

$('#portfolio-arrow-next').on('click', function (event) {
	event.preventDefault();
	portfolio.slick('slickNext');
});

