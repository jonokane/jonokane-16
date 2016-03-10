$(document).ready(function() {

    //masonry
    var container = document.querySelector('#folio-grid');
    var msnry = new Masonry(container, {
        // columnWidth: 280,
        isFitWidth: true,
        isInitLayout: false
    });
    msnry._isLayoutInited = true;
    msnry.layout();

    //smooth scroll
    $(function() {
        $('.smoothscroll').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top - 46;
                    $('html,body').animate({
                        scrollTop: targetOffset
                    }, 600, "easeInOutSine");
                    return false;
                }
            }
        });
    });

    //ajax settings
    $.ajaxSetup({
        cache: false
    });

    $(document).ajaxComplete(function() {
        setTimeout(delayLoadSlick, 500);
        //instantiate slick
        function delayLoadSlick() {
            $(window).trigger('resize');

            $('.folio-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.folio-slider',
                dots: true,
                centerMode: true,
                focusOnSelect: true
            });





            // $('.folio-slider').slick({
            //     setPosition: 0,
            //     dots: true,
            //     lazyLoad: 'ondemand'
            // });
        }
    });

    //folio items
    // $('.folio-fluence-marketing').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-fluence-marketing.html',
    //         multiple_opened: true
    //     });
    // });

    // $('.secondary-modal').click(function(){
        
    // })

    // $('.folio-fluence-app').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-fluence-app.html',
    //         multiple_opened: true
    //     });
    // });

    // $('.folio-shift').click(function() {
    //     $('#modal-box').modal('open', {
    //         url: 'folio-content/folio-shift.html',
    //     });
    // });

$('.folio-shift').click(function() {
    $('#modal-box').modal()   
    // $('#modal-box').modal({
    //     // show: false,
    //     remote: 'folio-content/folio-shift.html'
    // });
}); 

    // $('.folio-saratoga-speed').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-saratoga-speed.html',
    //     });
    // });

    // $('.folio-telenav').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-telenav.html',
    //     });
    // });

    // $('.folio-huddleup').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-huddleup.html',
    //     });
    // });

    // $('.folio-breeze').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-breeze.html',
    //     });
    // });

    // $('.folio-intuit').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-intuit.html',
    //     });
    // });

    // $('.folio-ybubbles').click(function() {
    //     $('#modal-box').modal('reveal', 'open', {
    //         url: 'folio-content/folio-ybubbles.html',
    //     });
    // });

    // $('.folio-thingsly').click(function() {
    //     $('#modal-box').bootstrap('reveal', 'open', {
    //         url: 'folio-content/folio-thingsly.html',
    //     });
    // });

    // $('.folio-ydn').click(function() {
    //     $('#modal-box').bootstrap('reveal', 'open', {
    //         url: 'folio-content/folio-ydn.html',
    //     });
    // });

    // $('.folio-ydpl').click(function() {
    //     $('#modal-box').bootstrap('reveal', 'open', {
    //         url: 'folio-content/folio-ydpl.html',
    //     });
    // });


// jkcontact
$(function(){
    $("#JqAjaxForm").submit(function(e){
       e.preventDefault();

        dataString = $("#JqAjaxForm").serialize();

        $.ajax({
        type: "POST",
        url: "emailer.php",
        data: dataString,
        dataType: "json",
        success: function(data) {

            if(data.email_check == "invalid"){
                $("#contactMessage").html("<div class='errorMessage'>Sorry " + data.name + ", " + data.email + " isn't a valid email address. Give it another shot. Thanks</div>");
            } else {
                $("#contactMessage").html("<div class='successMessage'>Hi "+ data.name + ". Thanks for contacting me. I'll respond to you via email at " + data.email + ". Cheers.</div>");
                $("#JqAjaxForm").hide();
            }

        }

        });          

    });
});



});