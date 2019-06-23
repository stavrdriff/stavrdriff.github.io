$(".header-slider").owlCarousel({
	items:1,
	nav:false,
	dots:true,
	loop:true
});
$(".about-slider").owlCarousel({
	items:1,
	nav:true,
	dots:false,
	loop:true,
	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
});
$(".collection-slider").owlCarousel({
	items:3,
	nav:true,
	dots:false,
	loop:true,
	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>']
});
$(".customers-slider").owlCarousel({
	items: 2,
	nav: false,
	dots: true,
	loop: true
});