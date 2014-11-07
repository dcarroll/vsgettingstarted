// JavaScript Document
$(function () {
    $(".linkTableNav > a").click(function (e) {
        $(e.target).addClass("selected")
            .siblings().removeClass("selected");
        $("#" + e.target.id.substring("LinkTableNav".length) + "Links")
            .show().siblings(":not(.linkTableNav)").hide();
        e.preventDefault();
    });
    $(".linkTableSubNav > a").click(function (e) {
        $(e.target).addClass("selected")
            .siblings().removeClass("selected");
        $("#" + e.target.id.replace("SubNav", ""))
            .show().siblings().hide();
        e.preventDefault();
    });
});
