$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1) {
        $('#navbar').css('padding', '5px 25px')
    } else {
        $('#navbar').css('padding', '5px')
    }
})