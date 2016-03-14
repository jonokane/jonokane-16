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
                arrows: false,
                fade: true,
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
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
        }
    });

    $(function() {
        $('.folio-8t-site').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-8t-site.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });


    $(function() {
        $('.folio-8t-ftux').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-8t-ftux.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });


    $(function() {
        $('.folio-cinematiq').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-cinematiq.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-fluence-marketing').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-fluence-marketing.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-fluence-app').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-fluence-app.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });



    $(function() {
        $('.folio-shift').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-shift.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-saratoga-speed').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-saratoga-speed.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-telenav').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-telenav.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-huddleup').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-huddleup.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-breeze').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-breeze.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-intuit').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-intuit.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-ybubbles').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-ybubbles.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-thingsly').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-thingsly.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-ydn').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-ydn.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });

    $(function() {
        $('.folio-ydpl').on('click', function() {
            event.preventDefault();
            var $this = $(this).data('target');
            $('#modal-box').load('folio-content/folio-ydpl.html', function(response, status, xhr) {
                if (status == "success") {
                    $(this).modal('show');
                }
            });
        });
    });


    // jkcontact
    $(function() {
        $("#JqAjaxForm").submit(function(e) {
            e.preventDefault();

            dataString = $("#JqAjaxForm").serialize();

            $.ajax({
                type: "POST",
                url: "emailer.php",
                data: dataString,
                dataType: "json",
                success: function(data) {

                    if (data.email_check == "invalid") {
                        $("#contactMessage").html("<div class='errorMessage'>Sorry " + data.name + ", " + data.email + " isn't a valid email address. Give it another shot. Thanks</div>");
                    } else {
                        $("#contactMessage").html("<div class='successMessage'>Hi " + data.name + ". Thanks for contacting me. I'll respond to you via email at " + data.email + ". Cheers.</div>");
                        $("#JqAjaxForm").hide();
                    }

                }

            });

        });
    });



});
