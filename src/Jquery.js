$(document).ready(function () {
    $("#section0").click(function () {
        alert("Coming soon");
    });
    $("#section00").click(function () {
        alert("Coming soon");
    });

$("#video-button").click(function () {
        var showVideo = $(".results-video-item");
        showVideo.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $("#photograph-button").click(function () {
        var showPhoto = $(".results-photo-item");
        showPhoto.removeClass("hide-content");

        var showVideo = $(".results-video-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showVideo.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $("#social-button").click(function () {
        var showSocial = $(".results-social-item");
        showSocial.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showVideo = $(".results-video-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showVideo.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $("#pr-button").click(function () {
        var showPR = $(".results-pr-item");
        showPR.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showVideo = $(".results-video-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showVideo.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $("#radio-button").click(function () {
        var showRadio = $(".results-radio-item");
        showRadio.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showVideo = $(".results-video-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showVideo.addClass("hide-content");
    });


    $(".results-video").click(function () {
        var showVideo = $(".results-video-item");
        showVideo.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $(".results-photo").click(function () {
        var showPhoto = $(".results-photo-item");
        showPhoto.removeClass("hide-content");

        var showVideo = $(".results-video-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showVideo.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $(".results-social").click(function () {
        var showSocial = $(".results-social-item");
        showSocial.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showVideo = $(".results-video-item");
        var showPR = $(".results-pr-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showVideo.addClass("hide-content");
        showPR.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $(".results-pr").click(function () {
        var showPR = $(".results-pr-item");
        showPR.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showVideo = $(".results-video-item");
        var showRadio = $(".results-radio-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showVideo.addClass("hide-content");
        showRadio.addClass("hide-content");
    });

    $(".results-radio").click(function () {
        var showRadio = $(".results-radio-item");
        showRadio.removeClass("hide-content");

        var showPhoto = $(".results-photo-item");
        var showSocial = $(".results-social-item");
        var showPR = $(".results-pr-item");
        var showVideo = $(".results-video-item");
        showPhoto.addClass("hide-content");
        showSocial.addClass("hide-content");
        showPR.addClass("hide-content");
        showVideo.addClass("hide-content");
    });
});

$.fn.inView = function () {
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = obj.offset().top + obj.outerHeight();

    if (scrollPosition >= 2000) {
        return "section4";
    } else if (scrollPosition <= 1999 && scrollPosition >= 1000) {
        return "section2";
    } else if (scrollPosition <= 999) {
        return "section1";
    }
    // return visibleArea >= objEndPos && scrollPosition <= objEndPos
    //     ? true
    //     : false;
};

$(window).scroll(function () {
    var Background = $("#bg");
    Background.removeClass("a-active");
    var Solution = $("#sol");
    Solution.removeClass("a-active");
    var Slide = $("#slide");
    Slide.removeClass("a-active");

    var BackgroundBtn = $("#bg-button");
    BackgroundBtn.removeClass("button-nav-active");
    var SolutionBtn = $("#sol-button");
    SolutionBtn.removeClass("button-nav-active");
    var SlideBtn = $("#slide-button");
    SlideBtn.removeClass("button-nav-active");

    if ($("#section1").inView() == "section1") {
        Background.addClass("a-active");
        BackgroundBtn.addClass("button-nav-active");
    } else if ($("#section1").inView() == "section2") {
        Solution.addClass("a-active");
        SolutionBtn.addClass("button-nav-active");
    } else if ($("#section1").inView() == "section4") {
        Slide.addClass("a-active");
        SlideBtn.addClass("button-nav-active");
    }
});
