window.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.main_visual video');
    if (video) {
        video.muted = true;
        video.autoplay = true;
        video.playsInline = true;
        video.loop = true;


        video.play().catch(function (e) { });
    }
});


$(function () {
    const MMS = new Swiper('.main_reco_slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 16,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        speed: 5000,

        breakpoints: {
            // 0px 이상 (모바일)
            0: {
                slidesPerView: 1.5,
                spaceBetween: 8,
            },
            // 768px 이상 (태블릿)
            768: {
                slidesPerView: 3,
                spaceBetween: 12,
            },
            // 1024px 이상 (데스크탑)
            1024: {
                slidesPerView: 5,
                spaceBetween: 16,
            }
        }
    });



    //모바일
    const main_event_slide = new Swiper('.main_event_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 16,
        // 슬라이드 갯수 조정
        scrollbar: {
            el: ".main_event_mobile .scrollbar",
            hide: false,
            draggable: true,
            dragSize: 100,
        },
        //스와이프 브레이크 포인트는 전체 페이지를 반대로 작성해야함
        breakpoints: {
            1025: {
                slidesPerView: 2.5,
                spaceBetween: 24
            }
        }
    });

});

//모바일

$(function () {
    // $('.mbtn').on('click', function (e) {
    //     e.preventDefault();
    //     $('.hd_menu').toggleClass('on')
    // });

    // $('.xmbtn').on('click', function (e) {
    //     e.preventDefault();
    //     $('.hd_menu').toggleClass('on')
    // }); 아래 코드로 수정함.

    $('.mbtn').on('click', function (e) {
        e.preventDefault();
        $('.hd_menu').toggleClass('on');

        // 메뉴가 열리면 .hd_bottom 숨김, 닫히면 다시 보임
        if ($('.hd_menu').hasClass('on')) {
            $('.hd_bottom').hide();
        } else {
            $('.hd_bottom').show();
        }
    });
    $('.xmbtn').on('click', function (e) {
        e.preventDefault();
        $('.hd_menu').toggleClass('on');

        if ($('.hd_menu').hasClass('on')) {
            $('.hd_bottom').hide();
        } else {
            $('.hd_bottom').show();
        }
    });

    $('.gnb>ul>li button').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggleClass('on')
    });


});


$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 172) {
            $('#header .hd_bottom').addClass('fixed')
        } else {
            $('#header .hd_bottom').removeClass('fixed')
        }
    })
})





$(function () {


    $('.gnb>ul>li>button').on('click', function (e) {
        // 화면 너비 기준으로 분기
        if (window.innerWidth > 1024) {
            // PC 동작
            e.preventDefault();
            const $li = $(this).closest('li');
            if ($li.hasClass('on')) {
                // 이미 열려있으면 닫기 (PC에서는 안 닫고 싶으면 이 부분 빼면 됨)
                //$li.removeClass('on');
                //$li.find('.sub').slideUp(200);
                // 아무것도 안 함
            } else {
                // 다른 메뉴 닫기
                $('.gnb>ul>li').removeClass('on').find('.sub').slideUp(200);
                // 현재 메뉴 열기
                $li.addClass('on');
                $li.find('.sub').slideDown(200);
            }
        } else {
            // MOBILE 동작
            const $btn = $(this);

            // 다른 버튼 닫기
            $('.gnb>ul>li>button').not($btn).removeClass('on');
            // $btn.toggleClass('on');
        }
    });




    $('.footer_top .right .strong').on('click', function (e) {
        e.preventDefault();

        const $this = $(this);
        const $target = $this.next();

        if ($this.hasClass('on')) {
            // 이미 열려있는 경우 → 닫기
            $this.removeClass('on');
            $target.stop().slideUp();
        } else {
            // 다른 것들 닫기
            $('.footer_top .right .strong').removeClass('on');
            $('.footer_top .right ul').stop().slideUp();

            // 현재 것 열기
            $this.addClass('on');
            $target.stop().slideDown();
        }
    });
});




$(function () {
    AOS.init();
});




