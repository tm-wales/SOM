/*!
 * Pygmy header js v1.0.0 (https://www.techmeleon.co.uk)
 * Copyright 2018 Techmeleon
 * Licensed under Techmeleon
 */

cookieManagement = {
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
}

if(cookieManagement.getCookie("cookiePolicy") == "accepted") {
    window['ga-disable-' + googleAnalyticsID] = false;
} else {
    window['ga-disable-' + googleAnalyticsID] = true;
}