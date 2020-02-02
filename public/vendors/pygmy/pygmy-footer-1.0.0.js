/*!
 * Pygmy footer js v1.0.0 (https://www.techmeleon.co.uk)
 * Copyright 2018 Techmeleon
 * Licensed under Techmeleon
 */

$(document).ready(function() {
    // jQuery addon to disable elements
    (function($) {
        $.fn.toggleDisabled = function(){
            return this.each(function(){
                this.disabled = !this.disabled;
            });
        };
    })(jQuery);

    // Warnings
    $(".warnings .ie .warnings__btn").click(() => {
        $(".warnings .ie").addClass("hide")
        setTimeout(function () {
            $(".warnings .ie").remove()
        }, 1000);
        cookieManagement.setCookie("ieWarning","confirmed",1);
    })

    $(".warnings .cookie .warnings__btn").click(() => {
        $(".warnings .cookie").addClass("hide")
        setTimeout(function () {
            $(".warnings .cookie").remove()
        }, 1000);
    })

    $(".warnings .cookie .warnings__btn--good").click(() => {
        cookieManagement.setCookie("cookiePolicy","accepted",365);
        window['ga-disable-' + googleAnalyticsID] = false;
    })

    $(".warnings .cookie .warnings__btn--bad").click(() => {
        cookieManagement.clearAllCookies();
        cookieManagement.setCookie("cookiePolicy","declined",7);
        window['ga-disable-' + googleAnalyticsID] = true;
        runGA();
    })

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        if(cookieManagement.getCookie("ieWarning") !== "confirmed") {
            $(".warnings .ie").removeClass("hide")
        }
    }
    if(cookieManagement.getCookie("cookiePolicy") == "") {
        $(".warnings .cookie").removeClass("hide")
    }

    $(".warnings .hide").remove();

    // // On Scroll
    // var position = $(window).scrollTop();
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if(scroll > position) {
    //         // hide NAV
    //         $(".navigation").addClass("hide");
    //     } else {
    //         // remove NAV
    //         $(".navigation").removeClass("hide");
    //     }
    //     position = scroll;
    // });
});



