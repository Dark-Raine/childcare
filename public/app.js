$(document).ready(function(){
    $("#link1").click(function(){
        $path=$("#my-Intro").offset().top;

        $('body').animate({scrollTop:$path},1000);
    });
    $("#hero-btn").click(function(){
        $path=$("#my-Intro").offset().top;

        $('body').animate({scrollTop:$path},1000);
    });
    $("#link2").click(function(){
        $path=$("#Setting-anchor").offset().top;

        $('body').animate({scrollTop:$path},1000);
    });
    $("#link3").click(function(){
        $path=$("#pricings").offset().top;

        $('body').animate({scrollTop:$path},1000);
    });
    $("#link4").click(function(){
        $path=$("#contact").offset().top;

        $('body').animate({scrollTop:$path},1000);
    });
});