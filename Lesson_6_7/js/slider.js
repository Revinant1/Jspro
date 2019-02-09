$(document).ready(function () {
    $(".buton_next").click(function () {
        var facialSliderPage = $(".slider_page.facial");
        var facialSliderPageIndex = $(".slider_page.facial").index();
        var nextPageIndex = facialSliderPageIndex + 1;
        var nextPage = $(".slider_page").eq(nextPageIndex);
        facialSliderPage.fadeOut(1200);
        facialSliderPage.removeClass("facial");

        if(nextPageIndex == ($(".slider_page:last").index() + 1)){
            $(".slider_page").eq(0).fadeIn(1200);
            $(".slider_page").eq(0).addClass("facial");
        }else{
            nextPage.fadeIn(1200);
            nextPage.addClass("facial")
        }

    });
    $(".buton_prev").click(function () {
        var facialSliderPage = $(".slider_page.facial");
        var facialSliderPageIndex = $(".slider_page.facial").index();
        var prevPageIndex = facialSliderPageIndex - 1;
        var prevPage = $(".slider_page").eq(prevPageIndex);
        
        facialSliderPage.fadeIn(1200);
        facialSliderPage.removeClass("facial");
        prevPage.fadeIn(1200);
        prevPage.addClass("facial")
    })
})(jQuery);