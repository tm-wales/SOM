/*!
 * Pygmy header js for app v1.0.0 (https://www.techmeleon.co.uk)
 * Copyright 2018 Techmeleon
 * Licensed under Techmeleon
 */

let pyg = {
    init: {
        start: () => {
            pyg.cookieManagement.gaCheck();
        },
        end: () => {
            pyg.warnings.init.ie();
            pyg.warnings.init.cookie();
        }
    },
    jQueryAddons: () => {
        (function($) {
            $.fn.toggleDisabled = function(){
                return this.each(function(){
                    this.disabled = !this.disabled;
                });
            };
        })(jQuery);
    },
    cookieManagement: {
        gaCheck: () => {
            if(pyg.cookieManagement.getCookie("cookiePolicy") == "accepted") {
                window['ga-disable-' + googleAnalyticsID] = false;
            } else {
                window['ga-disable-' + googleAnalyticsID] = true;
            }
        },
        setCookie: (cname, cvalue, exdays)  => {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        getCookie: (cname) => {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        deleteCookie: (cname) => {
            setCookie(cname, "", -1);
        },
        clearAllCookies: () => {
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var cookie = ca[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        }
    },
    warnings: {
        init: {
            ie: () => {
                // I.E warning
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
                {
                    if(pyg.cookieManagement.getCookie("ieWarning") !== "confirmed") {
                        $(".warnings .ie").removeClass("hide")
                    } else {
                        // attach event for I.E warning
                        $(".warnings .ie .warnings__btn").click(() => {
                            $(".warnings .ie").addClass("hide")
                            setTimeout(function () {
                                $(".warnings .ie").remove()
                            }, 1000);
                            pyg.cookieManagement.setCookie("ieWarning","confirmed",1);
                        })
                    }
                }

                // remove hidden warning from DOM is hidden
                $(".warnings .hide").remove();
            },
            cookie: () => {
                // Cookie warnings
                if(pyg.cookieManagement.getCookie("cookiePolicy") == "") {
                    $(".warnings .cookie").removeClass("hide")
                } else {
                    $(".warnings .cookie .warnings__btn").click(() => {
                        $(".warnings .cookie").addClass("hide")
                        setTimeout(function () {
                            $(".warnings .cookie").remove()
                        }, 1000);
                    })

                    $(".warnings .cookie .warnings__btn--good").click(() => {
                        pyg.cookieManagement.setCookie("cookiePolicy","accepted",365);
                        window['ga-disable-' + googleAnalyticsID] = false;
                    })

                    $(".warnings .cookie .warnings__btn--bad").click(() => {
                        pyg.cookieManagement.clearAllCookies();
                        pyg.cookieManagement.setCookie("cookiePolicy","declined",7);
                        window['ga-disable-' + googleAnalyticsID] = true;
                        runGA();
                    })
                }

                // remove hidden warning from DOM is hidden
                $(".warnings .hide").remove();
            }
        }
    },
 }

 pyg.init.start();