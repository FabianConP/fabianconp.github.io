function setCarouselHeight(){
    var navHeight = $( ".mdl-layout__header" ).height();
    var carouselHeight = $(window).height() - navHeight;
    $( ".carousel .item" ).height(carouselHeight);
    console.log(carouselHeight);
}

$( document ).ready(function() {
    setCarouselHeight();
});

$( window ).resize(function() {
    console.log("Cambio");
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