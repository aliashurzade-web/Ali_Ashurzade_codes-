$(document).ready(function(){
    console.log($("#yazi").text());
    $("#yazi").text("Muellim Tunara daha cox sual verinde plss");
    console.log($("#yazi").text());




    $("input").val("Tunara sual verin muellim coxlu")

    $("#submitBtn").click(function(){
        alert($("input").val());
    });

    $("#Remove").click(function(){
        $("div").remove();
    });

    $("#Empty").click(function(){
        $("div").empty();
    });

});