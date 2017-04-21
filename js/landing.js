function setCarouselHeight(){
    var navHeight = $( ".mdl-layout__header" ).height();
    var carouselHeight = $(window).height() - navHeight;
    var IMAGE_HEIGHT = $("#img-projects").height();
    carouselHeight = Math.min(carouselHeight, IMAGE_HEIGHT);
    $( ".carousel .item" ).height(carouselHeight);
}

$( document ).ready(function() {
    setCarouselHeight();
});

$( window ).resize(function() {
    setCarouselHeight();
});

/**
 * .carousel .item {
  height: 300px;
}

.item img {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 300px;
}
 */