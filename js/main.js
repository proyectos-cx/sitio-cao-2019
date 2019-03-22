/* - EQUAL - HEIGTH - */
function unlimitedEqualHeights() {
    if ($('.equal-heights').length) {
        $('.equal-heights').each(function (i, obj) {
            var item = $(obj);
            var itemBreak = item.data('equal-h-break');
            var elementNum = item.data('equal-h-group');
            //console.log('.equal-h-group-' + elementNum);

            if (item.data('equal-h-break') === 'permanent') {
                //console.log('permanent');
                $('[data-equal-h-break="permanent"][data-equal-h-group="' + elementNum + '"]').equalizeHeights();
                setTimeout(function () {
                    $('[data-equal-h-break="permanent"][data-equal-h-group="' + elementNum + '"]').equalizeHeights();
                }, 600);
            } else {
                //console.log('funciona');
                if ($(window).width() >= itemBreak) {
                    $('[data-equal-h-group="' + elementNum + '"]').not('[data-equal-h-break="permanent"]').equalizeHeights();
                    setTimeout(function () {
                        $('[data-equal-h-group="' + elementNum + '"]').not('[data-equal-h-break="permanent"]').equalizeHeights();
                    }, 600);
                } else {
                    $('[data-equal-h-group="' + elementNum + '"]').not('[data-equal-h-break="permanent"]').css("height", "auto");
                    setTimeout(function () {
                        $('[data-equal-h-group="' + elementNum + '"]').not('[data-equal-h-break="permanent"]').css("height", "auto");
                    }, 600);
                }
            }
        });
    }
}
/* - EQUAL - HEIGTH - */

//////////////////////////////////////////////////////////////////
//Igual la altura de las cajas
$.fn.equalizeHeights = function () {

    var $items = $(this),
        heightArray = [];
    if (!$items.length) { return; }
    $items.height('auto');
    $items.each(function (index, elem) {
        heightArray.push($(elem).height());
    });
    $items.height(Math.max.apply(Math, heightArray));
    return this;
};
//////////////////////////////////////////////////////////////////




/*active menu*/
$(function () {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    console.log(pgurl);
    $('.navigation-page ul li a').each(function (i, obj) {
        item = $(obj);
        if (item.attr('href') === pgurl || item.attr('href') === '') {
            item.addClass('active');
        }
    });
});
/*active menu*/


(function($){
    
    
    $(document).on('ready',function(){
        
        /*slick home*/
        $('.slick-home-cao').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        /*slick home*/


        /*------------active menu responsive---------------*/
        $('#hamburguer').click(function () {
            $('.menu-list-mobile').toggleClass('active');

            $('#hamburguer .off').toggleClass('hide');
            $('#hamburguer .on').toggleClass('show');
            $('body').toggleClass('ohidden-body');
        });

            /*close menu*/
            $('.close').click(function () {
                $('.menu-list-mobile').removeClass('active');

                $('#hamburguer .off').removeClass('hide');
                $('#hamburguer .on').removeClass('show');
                $('body').removeClass('ohidden-body');
            });
            /*close menu*/
       /*------------active menu responsive---------------*/


       /*------------selector search despliegue--------------*/

        $(".entry-search .search input").keyup(function () {

            var search = $(".entry-search .search input").val();

            if (search.length == 0) {
                $('.keywords').removeClass('active');
            }else{
                $('.keywords').addClass('active');
            }

        });

        $(document).click(function () {
            $('.keywords').removeClass('active').hide();
        });

        $(document).on('tap', function () {
            $('.keywords').removeClass('active').hide();
        });


        /*--------------selector search despliegue----------------*/

        /*-----------------function-tabs-------------------*/
        $('ul.tabs').each(function () {

            var $active, $content, $links = $(this).find('a');

            $active = $($links.filter('[href="' + location.hash + '"]')[0] || $links[0]);
            $active.addClass('active');

            $content = $($active[0].hash);

            $links.not($active).each(function () {
                $(this.hash).fadeOut();
            });

            $(this).on('click', 'a', function (e) {
                $active.removeClass('active');
                $content.fadeOut();

                $active = $(this);
                $content = $(this.hash);

                // Make the tab active.
                $active.addClass('active');
                $content.fadeIn();

                e.preventDefault();
            });
        });
        /*-----------------function-tabs-------------------*/


        /*roll-arrow*/
        $('.menu-sidebar .dropdown-tab').click(function () {
            $('.menu-sidebar .dropdown-tab span img').toggleClass('active');
        })
        
        /*roll-arrow*/

        $("#accordion").accordion();
    });
    
    $(window).on('load',function(){
        /*funcion equalz height*/
        unlimitedEqualHeights();
        
    });
    
    $(window).on('resize',function(){
        /*funcion equalz height*/
        unlimitedEqualHeights();
        
    });
    
    $(window).on('scroll',function(){
        
        
    });
    
    
}(jQuery));