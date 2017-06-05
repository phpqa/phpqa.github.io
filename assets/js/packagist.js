(function ($) {

    'use strict';

    $(function () {

        // Packagist metrics

        var $packages = $('[data-packagist-repository-name]');
        if ($packages.length) {
            var libraries = {};
            $packages.each(function () {
                var name = $(this).data('packagist-repository-name');
                if ('undefined' === typeof libraries[name]) {
                    libraries[name] = true;
                    $.ajax({
                        url: 'https://packagist.org/packages/' + name + '.json',
                        dataType: 'json'
                    })
                        .done(function (data, textStatus, jqXHR) {
                            var name = data.package.name;
                            $('[data-packagist-repository-name="' + name + '"][data-packagist-metric="star"]').text(data.package.github_stars);
                            $('[data-packagist-repository-name="' + name + '"][data-packagist-metric="watch"]').text(data.package.github_watchers);
                            $('[data-packagist-repository-name="' + name + '"][data-packagist-metric="fork"]').text(data.package.github_forks);
                        })
                        .fail((function (name) {
                            return function (jqXHR, textStatus, errorThrown) {
                                $('[data-packagist-repository-name="' + name + '"][data-packagist-metric]').each(function () {
                                    $(this).parent().remove();
                                });
                            };
                        }(name)));
                }
            });
        }
        
    });

}(jQuery));
