$(document).ready(function() {
    $(".caseStudy__images__list__container").click(function(e) {  //use a class, since your ID gets mangled
        if($(this).hasClass("enlarge")) {
            $(this).removeClass("enlarge");
        } else {
            $(this).addClass("enlarge");
        }
    });

// animations on scroll
$('#divide1').waypoint(function(direction) {
    $('#divide1').addClass('animated fadeInLeft')
},{
    offset: '60%'
})
$('#divide2').waypoint(function(direction) {
    $('#divide2').addClass('animated fadeInLeft')
},{
    offset: '60%'
})
$('#divide3').waypoint(function(direction) {
    $('#divide3').addClass('animated fadeInLeft')
},{
    offset: '60%'
})

$('section.cases').waypoint(function(direction) {
    $('.js--wp-cases').addClass('animated fadeInUp')
},{
    offset: '60%'
})

// contact popup
$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        console.log(this.hash)
        if (target.length) {
            if(this.hash == "#contact-us") {
            $("#contact-us").toggleClass("popup__show--js");
            return false;
            } else {
            $('html,body').animate({
                scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    }
    });

    $('#contact-us, .popup__close').click(function(event) {
        event.stopPropagation();
        $("#contact-us").toggleClass("popup__show--js");
    })

    $(".popup__box").click(function(event) {
        event.stopPropagation();
    })

    // this is the id of the form
    $("#form_contact").submit(function(e) {
        var form = $(this);
        var url = "/contact-us"

        $(".form__submit").addClass("sent")

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function(data) {
                $(".form__submit").removeClass("sent")
                if (data.success == true) {
                    $("#contact-us").removeClass("popup__show--js");
                } else {
                    alert('Submission failed. Please contact SOM directly')
                }
            },
            fail: function(data) {
                $(".form__submit").removeClass("sent")
                alert('Submission failed. Please contact SOM directly')
            }
        });
        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});