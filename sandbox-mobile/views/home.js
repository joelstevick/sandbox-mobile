﻿sandbox_mobile.home = function (params) {
    "use strict";

        console.log('init');
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
                    $('#krish').show();
                    $('#cast').show();
                    $('#no').show();
                    $('#no').click(function () {
                        $('#krish').hide();
                        $('#cast').hide();
                        $('#no').hide();
                        $('#def').show();
                        $('#home').addClass('white-screen');
                    });
                }, 3000);
            }, 1000);
        };
    var viewModel = {
        //  Put the binding properties here
        viewShown: function () {
        },
        found_me: function()
        {
            found_me();
        }
    };

    return viewModel;
};