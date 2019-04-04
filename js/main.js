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
        
        if ($('.tabs .all').length) {
            $('.tabs .all').each(function (i, obj) {
                var item = $(obj);
                if (item.hasClass('active')) {
                    setTimeout(function () {
                        item.find('a').trigger('click');
                    }, 100);
                }
            });
        }

        $.fn.mobileTabs = function () {
            var item = $(this);
            var itemText = item.find('a').text();
            var itemParent = item.parent();
            var actionButton = itemParent.prev();
            itemParent.toggleClass('active');
            actionButton.toggleClass('active');
            actionButton.find('.data-text').text(itemText);

            setTimeout(function () {
                if ($(window).width() < 992) {
                    $('.slick-break-box').slick('setPosition');
                } else {
                    //do nothing
                }
            }, 100);
        };

        //Tabs - Default Action
        $('.tab_content').not('pre .tab_content').hide();

        $('.tab_container').each(function (i, obj) {
            var item = $(obj);
            item.find('.tab_content:first').show();
        });

        $('.tab-prod').not('pre .tab-prod').addClass('tabs-func');

        $('ul.tabs li').click(function () {
            var item = $(this);
            item.mobileTabs();

            if (!item.parents('.tabs').hasClass('goto-url')) {
                if (item.hasClass('all')) {

                    item.parents('.tabs').find('li').removeClass('active');
                    //$('ul.tabs li').removeClass('active');
                    item.addClass('active');
                    item.parents('.tabs-func').find('.tab_content').fadeIn();

                } else {

                    if (!item.hasClass('external-url')) {
                        item.parents('ul').find('li').removeClass('active');
                        $(this).addClass('active');
                        item.parents('.tabs-func').find('.tab_content').hide();
                        var activeTab = $(this).find('a').attr('href');
                        $(activeTab).fadeIn();

                        if (item.parents('.tabs').hasClass('tabs-with-mod-hash')) {
                            //////////////////////////////////////////////////////////////////////////////////////
                            //Products section Adjustments 
                            var itemTarget = item.find('a').attr('data-change-hash');

                            //Change the window location hash
                            var el = document.getElementById(itemTarget);
                            var id = el.id;
                            el.removeAttribute('id');
                            window.location.hash = itemTarget;
                            el.setAttribute('id', id);
                        }
                        return false;
                    }
                }
            } else {
                //do nothing
            }
        });
        
        /*-----------------function-tabs-------------------*/

        /*roll-arrow - drop-down*/
        $('.menu-sidebar .dropdown-tab').on('click', function () {
            $(this).find('span img').toggleClass('active');
            $(this).next().toggleClass('show');
            $(this).toggleClass('drop-active');
        });

        $('.menu-sidebar li a').not('.menu-sidebar li .drop-content li a').click(function () {
            $('.menu-sidebar .dropdown-tab span img').removeClass('active');
            $('.drop-content').removeClass('show');
            $('.menu-sidebar .dropdown-tab').removeClass('drop-active');
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


    $.fn.simplyAccordion = function () {
        var item = $(this);
        var itemNext = $(this).next();
        item.toggleClass('active').promise().done(function () {
            $('.accordion-title.active').not(item).removeClass('active');
        });
        itemNext.toggleClass('active').promise().done(function () {
            $('.accordion .deploy-content.active').not(itemNext).removeClass('active');
        });

    };

    $(document).on('click', '[data-deploy-accordion]', function () {
        $(this).simplyAccordion();
    });
    
    $(document).on('click', '[data-deploy-accordion-abc]', function () {
        if ($(window).width() < 992) {
            $(this).simplyAccordion();
        } else {
            //do nothing
        }
    });
    
    
}(jQuery));