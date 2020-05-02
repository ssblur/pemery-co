'use strict';

$('.more-information').click(function (e) {
    var info = $(e.target).parent().find('.information-card');
    if (info.hasClass('is-hidden')) {
        $('.information-card').addClass('is-hidden');
    }
    info.toggleClass('is-hidden');
});