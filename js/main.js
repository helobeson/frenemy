$(document).ready(function(){
    $('.header__burger').click(function(_event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function(_event) {
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.slider').slick({
        slidesToShow: 1, // толкьо 1 слайд показывать одновременно
        slidesToScroll: 1, // по 1-му слайду проскролливать
        speed: 5000, // медленная смена слайдов - скорость бегущей строки
        autoplay: true, // устанавливаем автозапуск слайдера
        autoplaySpeed: 0, //делаем запуск мгновенный с загрузкой страницы
        cssEase: 'linear', // делаем анимацию однотонной при смене слайда
        variableWidth: true, // растояние между слайдами убрал
        prevArrow: false,
        nextArrow: false,
    });
  

});