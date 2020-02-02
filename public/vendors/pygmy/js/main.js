/*
    * Pygmy content js for CMS component v1.0.0 (https://www.techmeleon.co.uk)
    * Copyright 2018 Techmeleon
    * Licensed under Techmeleon
 */

let pygcms = {
    jQueryAddons: () => {
        (function($) {
            $.fn.toggleDisabled = function(){
                return this.each(function(){
                    this.disabled = !this.disabled;
                });
            };
        })(jQuery);
    },
    nav: {
        loading: false,
        expandList: () => {
            $(".pyg__navigation__group").click(function(e) {
                $(this).toggleClass("collapsed")
                e.stopPropagation();
            })
            $(".pyg__navigation__link__").click(function(e) {
                $(this).toggleClass("collapsed")
            })
        },
        toggleWidth: () => {
            $(".colourfulSwitch__label").click(function(e) {
                $(".pyg__navigation").toggleClass("collapsed")
            })
        },
        navigate: () => {
            $(".pyg__navigation__link:not(.logout)").click(function(e) {
                console.log('preventing...')
                e.preventDefault();
            })

            $(".pyg__navigation__highlight").click(function(e) {
                e.stopPropagation();
                e.preventDefault();
                let ele = $(this);

                if(pygcms.nav.loading === false) {
                    $('.pyg__navigation__highlight').removeClass("active")
                    ele.addClass("active");

                    ele = $(this).find('.pyg__navigation__link')
                    let route = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
                    route += ele.attr("href")

                    console.log(route);
                    axios({
                        url: route,
                        method: 'get',
                    }).then(response => {
                        $(".pyg__section").html(response.data)
                        pygcms.nav.loading = false;
                        console.log(response)
                    }).catch(response => {
                        $(".pyg__section").html(response)
                        pygcms.nav.loading = false;
                        console.log(response)
                    })
                }
            })
        }
    }
}

pygcms.jQueryAddons();
pygcms.nav.expandList();
pygcms.nav.toggleWidth();
pygcms.nav.navigate();
