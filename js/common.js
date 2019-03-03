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
});