


$(function(){

    $("#title").load("../page/title/title1.html")
    $("#dynamic").load("../page/dynamic/body1.html")
    //切换
    $(".menu-type").click(function() {
        $("#title").load($(this).data("page"))
        $("#dynamic").load($(this).data("page1"))

    })


})