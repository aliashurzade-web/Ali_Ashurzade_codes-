
$(document).ready(function(){

    $("#styleBtn").click(function(){
        $("h1").css({
            "background-color": "#6d28d9",
            "color": "#ffffff",
            "font-size": "50px",
            "border": "3px solid #c084fc",
            "text-shadow": "0px 0px 15px #c084fc"
        });
    });

    $("#showBtn").click(function(){
        $("h1").show(500);
    });

    $("#hideBtn").click(function(){
        $("h1").hide(500);
    });

    $("#toggleBtn").click(function(){
        $("h1").toggle(500);
    });

});
