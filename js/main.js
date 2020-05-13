$( document ).ready(function() {

     paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };

    Pace.on('done', function() {
        $('.p').delay(300).animate({top: '-30%', opacity: '0'}, 1500, $.bez([0.19,1,0.22,1]));


        $('#preloader').delay(200).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

        TweenMax.from(".title", 2, {
            delay: 1.8,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
        })
    });


    $('a[href*="#"]').click(function(e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })

    AOS.init({
        duration: 1200,
    })

    $(".btnMenu").click(() => {
        $(".menu").toggleClass("activeMenu");
    });

    $(".hidePopup").click(() => {
        $(".popup").removeClass("show");
    });

    $(".btnQuestionnaire").click(() => {
        $(".popup").addClass("show");
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) $(".popup").removeClass("show");
    });

    $(".menuItem").click(function() {
        $(this).find('> .subMenu').toggleClass("show");
    });


    $('.valid').on('blur', function(){
        if ($(this).val().length < 1) {
            $(this).parent().addClass('invalid');
        } else {
            $(this).parent().removeClass('invalid');
        }
    });

    $('.carousel').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '10px',
        slidesToShow: 1,
        infinite: true,
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next"></button>'
    });
    $('.carouselBottom').slick({
        arrows: true,
        centerPadding: '10px',
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next"></button>'
    });

    document.getElementById("uploadBtn").onchange = function () {
        document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
    };

});
