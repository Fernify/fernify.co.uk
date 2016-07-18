(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-44030676-1', 'auto');
ga('send', 'pageview');

$(function () {
    $("#coffeeCarousel").slick({autoplay:true, arrows:true, speed:300, slidesToShow:3, slidesToScroll:1, dots:false,
        responsive:[
            { breakpoint: 990, settings: { slidesToShow: 2, slidesToScroll: 2, dots: false, arrows: true, autoplay:true } },
            { breakpoint: 720, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false, autoplay:true } }
    ]});

    $("#contactFormSubmit").click(function(event){
        var n = $("#nameText").val();
        var e = $("#emailText").val();
        var m = $("#messageText").val();                
        if(n != "" && e != "" && m != ""){
            $("#sentMailSpan").hide();
            $.ajax({
                type: "POST",
                url: "mail_handler.php",
                data: { "e" : e, "n" : n, "m" : m },
                success: function(data) {
                    $("form").slideUp();
                    $("#sentMailSpan").slideDown();
                },
                error: function (xhr, ajaxOptions, thrownError){
                    alert("An error has occured and your email can't be sent right now, please try again or contact me directly at contact@fernify.co.uk");
                }
            });
        }
        else{
            $("#sentMailSpan").hide();
            $("#errorMessage").show();
        }
    });

    $(".toDaniel").click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $("#daniel").offset().top }, 500);
    });
    $(".toWork").click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $("#work").offset().top }, 500);
    });
    $(".toPlay").click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $("#play").offset().top }, 500);
    });
    $(".toContact").click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: $("#contact").offset().top }, 500);
    });
});