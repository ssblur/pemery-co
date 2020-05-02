'use strict';

$(function () {
    var button = $(document.createElement('div'));
    button.css({
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        display: 'none'
    });
    button.click(function (e) {
        $(e.target).parent().click();
    });
    $('.more-information').each(function (index, parent) {
        $(parent).append(button.clone(true).css('display', 'block'));
    });

    $('.more-information').click(function (e) {
        var info = $(e.target).parent().find('.information-card');
        if (info.hasClass('is-hidden')) {
            $('.information-card').addClass('is-hidden');
        }
        info.toggleClass('is-hidden');
    });
});