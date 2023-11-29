$(window).scroll(function() {
    var scrollY = $(document).scrollTop();
    var scrollYY = 0;
    if(scrollY > 30) {
        $(".nav").css({
            "position":"fixed"
        });
        $(".nav").css("top", "0");
        $(".nav").css("z-index", "1");
    } else {
        $(".nav").css("position", "absolute");
        $(".nav").css("top", "30px");
    }
    setTimeout(function() {
        var scrollYY = $(document).scrollTop();
        if(scrollYY > scrollY) {
            scrollY = scrollYY;
            $(".nav").hide();
        } else {
            scrollY = scrollYY;
            $(".nav").show();
        }
    }, 1000);

});