$(function () {

    /******************** 하위브라우저 접근 차단 ********************/
    if (navigator.userAgent.match(/MSIE 8/)) $('.ie8').show();

    /******************** 네비게이션 제어 ********************/
    var _headerBtn = $('header .open'),
        _mobileNav = $('nav').find('ul'),
        _windowWidth;

    _headerBtn.on('click', function () {
        _headerBtn.toggleClass('on');
        _mobileNav.slideToggle(500);
    });

    $(window).on('load resize', function () {
        _windowWidth = $(window).width();
        _headerBtn.removeClass('on');
        _windowWidth > 1024 ? _mobileNav.show() : _mobileNav.hide();
    });

    /******************** 스크롤 애니메이션 정의 ********************/

    var move_el = $('*[data-animation]'), //무빙 요소
        move_name, //무빙 정의
        move_delay, //순차무빙 딜레이
        move_duration, //순차무빙 시간
        scroll, //스크롤 값
        start_point = $(window).height() * 0.95, //애니메이션 시작 높이(밑에서부터 화면 높이의 5%)
        top_btn = $('.move_top'), //TOP 버튼
        top_btn_flag = 0; //TOP 버튼 상태

    move_el.addClass('wait-animation');
    $(window).on('load scroll', function () {
        scroll = $(this).scrollTop();

        //순차 애니메이션 제어
        move_el.each(function () {
            move_name = $(this).data('animation');
            move_delay = $(this).data('delay') * 100; //단위 0.1초
            move_duration = $(this).data('duration') * 1000; //단위 1초
            $(this).addClass('animated ' + move_name);
            if (move_delay >= 0)
                $(this).css({
                    '-webkit-animation-delay': move_delay + 'ms',
                    'animation-delay': move_delay + 'ms'
                });
            if (move_duration >= 0)
                $(this).css({
                    '-webkit-animation-duration': move_duration + 'ms',
                    'animation-duration': move_duration + 'ms'
                });
            if (scroll > $(this).offset().top - start_point)
                $(this).removeClass('wait-animation');
        });
    });
});