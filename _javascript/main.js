'use strict';

$('.more-information').click((e) => {
    const info = $(e.target).parent().find('.information-card');
    if(info.hasClass('is-hidden')){
        $('.information-card').addClass('is-hidden');
    }
    info.toggleClass('is-hidden');
})