$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height() - 250;
    var tags = $(".hidden");
      
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
      
        if ($(tag).position().top < pageBottom) {
            $(tag).removeClass("hidden");
        }
    }
}); 
$(".header__item").on("click", function() {
    $('.roll__iframe').attr("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1");
});
$(".roll__close").on("click", function() {
    $('.roll__iframe').attr("src", "https://www.youtube.com/embed/dQw4w9WgXcQ");
});