$(document).ready(function () {
  $("#carouselOne").owlCarousel({
    items: 1,
    nav: false,
    loop: true
  });
  $("#carouselTwo").owlCarousel({
    items: 4,
    margin: 15,
    nav: false,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      650: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  });
  var owl = $('#carouselTwo');
  owl.owlCarousel();
  $('.portfolio-controls__arrow-next').click(function () {
    owl.trigger('next.owl.carousel');
  })
  $('.portfolio-controls__arrow-prev').click(function () {
    owl.trigger('prev.owl.carousel', [300]);
  })
});