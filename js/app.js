function scrollTo() {
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top},400);
}

function makeModal(image) {
    return $('<div class="overlay"></div>')
        .append($('<div class="modal"></div>')
            .append($(`<img src=${image} />`)
                .addClass('responsive-image')
            )
        );
}

function destroyModal() {
    $('.overlay').remove();
}

$('.nav-item > a').on('click', scrollTo);

$(".top > a").on("click", scrollTo);

$('.project-image').on('click', function() {
    $('body').append(makeModal($(this).attr('src')));
    $('.modal').animate({opacity: 1});
    $('body').addClass('modal-open');
    $('.overlay').on('click', function() {
        $('.modal').animate({opacity: 0}, {done:destroyModal});
        $('body').removeClass('modal-open');
    })
});

$('.hamburger').on('click', function() {
    $('.collapsing-nav').toggleClass('collapse-hidden');
});