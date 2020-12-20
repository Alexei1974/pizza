$(function () {
 
    

    // яндекс  карта        

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.794887, 37.712812],
                zoom: 14
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'г. Москва, Преображенская площадь, 8',
               
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/svg/pizza-slice.svg',
                // Размеры метки.
                iconImageSize: [40, 52],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-10, -38]
            });
    
          
    
        myMap.geoObjects
            .add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
           
    });

    // яндекс  карта--------

    // popup


    $('.products__btn-btn').on('click', function () {
        $('.popup.popup-order').addClass("is-active");
        $("body, html").addClass("no-scroll");
      
        
    });

    $('.popup-close').on('click', function () {
        $('.popup').removeClass("is-active");
        $("body, html").removeClass("no-scroll");
    });
    $(document).on('mouseup', function (e) { // событие клика по веб-документу
        var div = $(".popup__content"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.popup').removeClass("is-active");
            $("body, html").removeClass("no-scroll");
        }
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
        $('.popup').removeClass("is-active");
        $("body, html").removeClass("no-scroll");
    });

   

    // popup-----------
    $('.header__burger').on('click', function () {
        $('.header__burger, .header__list').toggleClass("active");
        
    });
    $('.header__link').on('click', function () {
        $('.header__burger, .header__list').removeClass("active");
    });
    $('.tel-mobal').on('click', function () {
        $('.header__burger, .header__list').removeClass("active");
    });

    
        $(".header__link, .products-more").mPageScroll2id({
           offset:15,
           scrollSpeed: 1200,
        });


       
    

   
 var mixer = mixitup('.products__inner-box');

 var headerPage = document.querySelector('.header');
      
 window.addEventListener('scroll', function() {
   if (window.pageYOffset > 0) {
     headerPage.classList.add('is-active');
   } else {
     headerPage.classList.remove('is-active');
   }
   
 });

});



