window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
        }
        else {
            $menu.classList.add('is-show');
        }
    });
});

$(function() {
    $(window).scroll(function() {
        $("nav.floating").stop().animate(
            {"top": $(window).scrollTop() + 100},
        500);
    });
});

$(function() {
    const clickBtn = document.getElementById('click-btn');
    const popupWrapper = document.getElementById('popup-wrapper');
    const close =document.getElementById('close');

    clickBtn.addEventListener('click', () => {
        popupWrapper.style.display = "block";
    });

    popupWrapper.addEventListener('click', e => {
        if (e.target.id === popupWrapper.id || e.target.id === close.id) {
            popupWrapper.style.display = 'none';
        }
    });

})