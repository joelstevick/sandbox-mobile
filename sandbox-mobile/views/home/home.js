sandbox_mobile.home = function (params) {
    "use strict";

    console.log('init');
    var show_friends = function () {
        $('#reset').hide();
        $('#krish').show();
        $('#cast').show();
        $('#no').show();
        $('#home').removeClass('white-screen');
        $('#def').hide();

    }
    var definitely_not = function () {
        $('#krish').hide();
        $('#cast').hide();
        $('#no').hide();
        $('#def').show();
        $('#home').addClass('white-screen');
        $('#reset').show();
    }
    $('#no').click(function () {
        console.log('#no clicked');
        definitely_not();
    });

    var found_me = function () {
        $('#find_me').hide();
        $('#you').show();

        // after 1 second, scary face appears, then after 3 seconds, turn the background magenta
        setTimeout(function () {
            $('.home-view').addClass('scary');
            $('#blog').hide();
            $('#you').hide();

            setTimeout(function () {
                $('#home').removeClass('scary');

                show_friends();

            }, 3000);
        }, 1000);
    };
    var viewModel = {
        //  Put the binding properties here
        viewShown: function () {
        },
        found_me: function () {
            found_me();
        },
        definitely_not: definitely_not,
        reset: function () {
            sandbox_mobile.game3d.init();
        }
    };

    return viewModel;
};