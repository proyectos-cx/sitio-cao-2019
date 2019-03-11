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



(function($){
    
    
    $(document).on('ready',function(){
        
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