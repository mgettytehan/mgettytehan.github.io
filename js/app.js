function scrollTo() {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top},400);
}

$(".nav-item > a").on("click", scrollTo);

$(".top > a").on("click", scrollTo);

$(".hamburger").on("click", ()  => {
    $(".collapsing-nav").toggleClass("collapse-hidden");
});
