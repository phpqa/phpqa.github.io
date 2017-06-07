(function ($) {

    'use strict';

    $(function () {

        // Get metrics - try packagist first, fallback to github
        var $githubPackages = $('[data-github-name]');
        if ($githubPackages.length) {
            var gatherMetricsFromPackagist = function (name, successHandler, failureHandler) {
                $.ajax({
                    url: 'https://packagist.org/packages/' + name + '.json',
                    dataType: 'json',
                    xhrFields: {withCredentials: false}
                })
                    .done(successHandler)
                    .fail(failureHandler);
            };
            var updateMetricsFromPackagist = function (data) {
                var name = data.package.name;
                $('[data-packagist-name="' + name + '"][data-metric="stargazers"]').text(data.package.github_stars);
                $('[data-packagist-name="' + name + '"][data-metric="watchers"]').text(data.package.github_watchers);
                $('[data-packagist-name="' + name + '"][data-metric="forks"]').text(data.package.github_forks);
            };
            var gatherMetricsFromGitHub = function (name, successHandler, failureHandler) {
                $.ajax({
                    url: 'https://api.github.com/repos/' + name,
                    headers: {Accept: 'application/vnd.github.v3+json'}
                })
                    .done(successHandler)
                    .fail(failureHandler);
            };
            var updateMetricsFromGitHub = function (data) {
                var name = data.full_name;
                $('[data-github-name="' + name + '"][data-metric="stargazers"]').text(data.stargazers_count);
                $('[data-github-name="' + name + '"][data-metric="watchers"]').text(data.subscribers_count);
                $('[data-github-name="' + name + '"][data-metric="forks"]').text(data.forks_count);
            };
            var removeMetricsByGitHubName = function (name) {
                $('[data-github-name="' + name + '"][data-metric]').each(function () {
                    $(this).parent().remove();
                });
            };

            var loadedByGithubName = {};
            $githubPackages.each(function () {
                var nameOnGitHub = $(this).data('github-name');
                var nameOnPackagist = $(this).data('packagist-name');
                if ('undefined' === typeof loadedByGithubName[nameOnGitHub]) {
                    loadedByGithubName[nameOnGitHub] = true;
                    gatherMetricsFromPackagist(
                        nameOnPackagist,
                        function (data) {
                            updateMetricsFromPackagist(data);
                        },
                        function () {
                            gatherMetricsFromGitHub(
                                nameOnGitHub,
                                function (data) {
                                    updateMetricsFromGitHub(data);
                                },
                                function () {
                                    removeMetricsByGitHubName(nameOnGitHub);
                                }
                            )
                        }
                    );
                }
            });
        }
    });

}(jQuery));




