$(document).ready(function(){
    $("h1").css({
        "background-color":"blue",
        "color":"aqua",
        "border":"none"
    });

    $("#showbutton").click(function(){
        $("h1").show(500);
    });

    $("#hidebutton").click(function(){
        $("h1").hide(500);
    });

    $("#toggle_button").click(function(){
        $("h1").toggle(500);
    });
});