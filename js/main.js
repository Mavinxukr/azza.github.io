$( document ).ready(function() {

     paceOptions = {
        ajax: true,
        document: true,
        eventLag: false
    };

    Pace.on('done', function() {
        $('.p').delay(600).animate({top: '-3000px', opacity: '0'}, 1500, $.bez([0.19,1,0.22,1]));


        $('#preloader').delay(800).animate({top: '-3000px', opacity: '0'}, 2000, $.bez([0.19,1,0.22,1]));

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
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"><svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.849379 4.35355C0.654116 4.15829 0.654116 3.84171 0.849379 3.64645L4.03136 0.464466C4.22662 0.269204 4.5432 0.269204 4.73847 0.464466C4.93373 0.659728 4.93373 0.976311 4.73847 1.17157L1.91004 4L4.73847 6.82843C4.93373 7.02369 4.93373 7.34027 4.73847 7.53553C4.5432 7.7308 4.22662 7.7308 4.03136 7.53553L0.849379 4.35355ZM17 4.5L1.20293 4.5L1.20293 3.5L17 3.5L17 4.5Z" />\n' +
            '</svg></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next">' +
            '<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M16.1506 4.35355C16.3459 4.15829 16.3459 3.84171 16.1506 3.64645L12.9686 0.464466C12.7734 0.269204 12.4568 0.269204 12.2615 0.464466C12.0663 0.659728 12.0663 0.976311 12.2615 1.17157L15.09 4L12.2615 6.82843C12.0663 7.02369 12.0663 7.34027 12.2615 7.53553C12.4568 7.7308 12.7734 7.7308 12.9686 7.53553L16.1506 4.35355ZM0 4.5L15.7971 4.5L15.7971 3.5L0 3.5L0 4.5Z" />\n' +
            '</svg>\n</button>'
    });
    $('.carouselBottom').slick({
        arrows: true,
        centerPadding: '10px',
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"><svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.849379 4.35355C0.654116 4.15829 0.654116 3.84171 0.849379 3.64645L4.03136 0.464466C4.22662 0.269204 4.5432 0.269204 4.73847 0.464466C4.93373 0.659728 4.93373 0.976311 4.73847 1.17157L1.91004 4L4.73847 6.82843C4.93373 7.02369 4.93373 7.34027 4.73847 7.53553C4.5432 7.7308 4.22662 7.7308 4.03136 7.53553L0.849379 4.35355ZM17 4.5L1.20293 4.5L1.20293 3.5L17 3.5L17 4.5Z" />\n' +
            '</svg></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next">' +
            '<svg width="17" height="8" viewBox="0 0 17 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M16.1506 4.35355C16.3459 4.15829 16.3459 3.84171 16.1506 3.64645L12.9686 0.464466C12.7734 0.269204 12.4568 0.269204 12.2615 0.464466C12.0663 0.659728 12.0663 0.976311 12.2615 1.17157L15.09 4L12.2615 6.82843C12.0663 7.02369 12.0663 7.34027 12.2615 7.53553C12.4568 7.7308 12.7734 7.7308 12.9686 7.53553L16.1506 4.35355ZM0 4.5L15.7971 4.5L15.7971 3.5L0 3.5L0 4.5Z" />\n' +
            '</svg>\n</button>'
    });

    document.getElementById("uploadBtn").onchange = function () {
        document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
    };

});
