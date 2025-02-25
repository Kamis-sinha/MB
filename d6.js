$(document).ready(function(){
    $(".container").mouseenter(function(){
        $(".card").stop().animate({
            top: "-90px"
        }, "slow");
    }).mouseleave(function(){
        $(".card").stop().animate({
            top: "0px"
        }, "slow");
    });
});

$(".container").mouseenter(function(){
    $(".card, .heart").stop().animate({
        top: "-90px"
    }, "slow");
}).mouseleave(function(){
    $(".card, .heart").stop().animate({
        top: "0"
    }, "slow");
});