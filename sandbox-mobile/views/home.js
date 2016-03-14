sandbox_mobile.home = function (params) {
    "use strict";

    var init = function () {
        console.log('init');
        $('#blog').mouseenter(function () {
            $('#find_me').hide();

            // after 1 second, scary face appears, then after 3 seconds, turn the background magenta
            setTimeout(function () {
                $('body').addClass('scary');
                $('#blog').hide();
                $('#you').hide();

                setTimeout(function () {
                    $('body').removeClass('scary');
                    $('#krish').show();
                    $('#cast').show();
                    $('#no').show();
                    $('#no').click(function () {
                        $('#krish').hide();
                        $('#cast').hide();
                        $('#no').hide();
                        $('#def').show();
                        $('body').addClass('white-screen');
                    });
                }, 3000);
            }, 1000);
        });
    }
    var viewModel = {
        //  Put the binding properties here
        viewShown: function () {
            init();
        }
    };

    return viewModel;
};