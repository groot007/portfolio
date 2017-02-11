//import ('../libs/jquery/dist/jquery.min.js');
//import ('../libs/counter.js');
//import ('../libs/waypoint/jquery.waypoints.min.js');
//import ('../libs/waypoint/waypoint.js');
//import ('../libs/scrollToId/jquery.malihu.PageScroll2id.js');
//import ('../libs/magnific-popup/js/jquery.magnific-popup.min.js');

$(function() {
    var mnuH = $("header .top-header").height();
    $(window).on("scroll", function(e){
        if ($(this).scrollTop() > mnuH){
            $("header .top-header").addClass("minify");
        }else{
            $("header .top-header").removeClass("minify");
        }
    });

    $(".resp-menu i").on("click", function(e){
        if ($(this).parent().hasClass("active")){
            $(".top-header").removeClass("visible");
            $(this).parent().removeClass("active");
        }else{
           $(".top-header").addClass("visible");
           $(this).parent().addClass("active");
        }

    });

    $('.image-popup-no-margins').magnificPopup({
       type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: false
        }
    });


    $("a[href*='#']").mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: "easeInOutQuint",
        pageEndSmoothScroll: true,
        highlightClass:"highlighted",
    });

    $(document).on("click touchstart", function(e){
        if ($(document).width() > 768) return;
        var target = e.target;
        var h =  $(".top-header");
        var bar =  $(".resp-menu i");
        if (!bar.is(e.target) && !h.is(e.target) // если клик был не по нашему блоку
            && h.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".top-header").removeClass("visible");
                $(".resp-menu").removeClass("active");
        }
    });


    $('.skills').waypoint(function(direction){
         if(direction == "down"){
            $(".skills").find(".head").addClass("widthAnim");
            $(".skills .progres-bar").countTo();

         }else if(direction == "up"){
            $(".skills").find(".head").removeClass("widthAnim");
         }

    }, {offset: "50%"})

     $('.works').waypoint(function(direction){
         if(direction == "down"){
            $(".works .body-section a:even img").addClass("roll-in-right");
            $(".works .body-section a:odd img").addClass("roll-in-left");
         }else if(direction == "up"){
            $(".works .body-section a img").removeClass("roll-in-left roll-in-right");
         }

    }, {offset: "50%"});
     $(' .know-me').waypoint(function(direction){
         if(direction == "down"){
            $(".know-me .part-photo").addClass("pbp");
            $(".know-me .about-text, .know-me .quote").addClass("fade-left");
         }else if(direction == "up"){
            $(".know-me .part-photo").removeClass("pbp");
            $(".know-me .about-text, .know-me .quote").removeClass("fade-left");

         }

    }, {offset: "50%"})
     $(' .contacts').waypoint(function(direction){
         if(direction == "down"){
            $(".contacts .social-block").addClass("fade-left");
            $(".contacts .contact-form").addClass("fade-right");
         }else if(direction == "up"){
            $(".contacts .social-block").removeClass("fade-left");
            $(".contacts .contact-form").removeClass("fade-right");
         }

    }, {offset: "50%"})


    // var pageX = 0;
    // $(".front-section").on("mousemove", function(e) {
    //     var bgSize = $(this).css("background-size").replace(/[^\d\s\.]/g, "").split(" ");
    //     if (pageX) {
    //         if (e.pageX > pageX) {
    //             if (+bgSize[0] <= 120) {
    //                 newSize = +bgSize[0] + 0.2;

    //                 $(this).css({
    //                     "background-size": newSize + "% " + newSize + "%",
    //                 })
    //             }
    //         } else if (e.pageX < pageX) {

    //             if (+bgSize[0] > 100) {
    //                 newSize = +bgSize[0] - 0.2;
    //                 $(this).css({
    //                     "background-size": newSize + "% " + newSize + "%",
    //                 })
    //             }
    //         }
    //     }

    //     pageX = e.pageX;

    // })

});
$(document).on("pagecreate","#pageone",function(){
  $("p").on("swipeleft",function(){
    alert("You swiped left!");
  });
});

$(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(200).fadeOut('slow');
        $("header").find(".line-1").addClass("fadeUp");
        $("header").find(".line-2").addClass("fadeDown");
        $("header").find(".front-text h1").addClass("grow-line letter-anim");
        $("header").find(".front-text h3").addClass("letter-anim");
    });