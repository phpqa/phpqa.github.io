$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('.navbar').find('.nav-item').removeClass('active').filter(function () {
        return $(this).find('.nav-link').attr('href') === location.href.replace(location.hash,"");
    }).addClass('active');
});
