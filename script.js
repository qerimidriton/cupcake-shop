var carousel = document.querySelector('#carousel')
var carousel = new bootstrap.Carousel(carousel, {
    interval: 2000,
    wrap: true
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
});