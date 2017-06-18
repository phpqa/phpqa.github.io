(function ($) {

    'use strict';

    $(function () {

        // Tool filters
        
        (function () {
            var $tagFilters = $('.filters_container').find('[data-tag-filter]'),
                $searchFiltersField = $('.filters_container').find('[data-search-filter-field]'),
                $currentFiltersContainer = $('.filters_container').find('[data-current-filters-container]'),
                $targets = $('[data-filter-target]'),
                $targetFilters = $targets.find('[data-tag-filter]'),
                activeClass = 'active';

            var initiate = function () {
                if ($targetFilters.length) {
                    $targetFilters.on('click', function (event) {
                        toggleByTagText($(this).data('tag-filter'));
                        $(this).replaceWith($(this).clone(true, true)); // Fix hover state after click
                        event.preventDefault();
                    });
                }
                if ($tagFilters.length) {
                    $tagFilters.on('click', function (event) {
                        toggleByTagText($(this).data('tag-filter'));
                        event.preventDefault();
                    });
                }
                if ($searchFiltersField.length) {
                    $searchFiltersField.on('keyup', function (event) {
                        filterBySearchText($(this).val());
                        event.preventDefault();
                    });
                }
            };

            var getActiveTagFilterTexts = function () {
                return $tagFilters.filter('.' + activeClass).map(function () {
                    return $(this).data('tag-filter');
                });
            };

            var getActiveSearchFilterTexts = function () {
                var searchFilterValue = $searchFiltersField.val();
                if ('' === searchFilterValue) {
                    return [];
                }
                return $.map(searchFilterValue.split(','), function (searchFilterText) {
                     return '' === $.trim(searchFilterText) ? null : searchFilterText;
                });
            };

            var addCurrentFilter = function (filterText, closeCallback) {
                var $currentFilter = $('<span class="mr-2">'),
                    $closeAnchor = $('<button class="filter-remove" aria-label="remove" title="Remove">');
                $closeAnchor
                    .html('&times;')
                    .data('current-filter', filterText)
                    .on('click', function (event) {
                        closeCallback($(this).data('current-filter'));
                        event.preventDefault();
                    });
                $currentFilter.append(document.createTextNode($.trim(filterText)));
                $currentFilter.append($closeAnchor);
                $currentFiltersContainer.append($currentFilter);
            };

            var updateCurrentFilters = function () {
                // Empty the list
                $currentFiltersContainer.empty();

                // Add active tag filters
                var activeTagFilterTexts = getActiveTagFilterTexts();
                $.each(activeTagFilterTexts, function () {
                    addCurrentFilter(this, function (filterText) {
                        toggleByTagText(filterText);
                    });
                });

                // Add active search filters
                var activeSearchFilterTexts = getActiveSearchFilterTexts();
                $.each(activeSearchFilterTexts, function () {
                    var partText = this;
                    addCurrentFilter(this, function (filterText){
                        activeSearchFilterTexts = $.map(activeSearchFilterTexts, function (partText) {
                            return (partText === filterText) ? null : partText;
                        });
                        filterBySearchText(activeSearchFilterTexts.join(','));
                    });
                });
            };

            var updateCardsVisibility = function () {
                // Filter tools with tag filters
                var activeFiltersLength = $tagFilters.filter('.' + activeClass).length;
                $targets.each(function () {
                    var isVisible = $(this).find('[data-tag-filter].' + activeClass).length === activeFiltersLength;
                    $(this).toggleClass(activeClass, isVisible);
                });

                // Filter tools with search filters
                var searchText = $searchFiltersField.val();
                if ('' !== searchText) {
                    var searchTextParts = searchText.split(',');
                    searchTextParts = $.map(searchTextParts, function (partText) {
                        return $.trim(partText).toLowerCase();
                    });
                    $targets.filter('.' + activeClass).each(function () {
                        var isVisible = true,
                            text = $(this).text().toLowerCase();
                        $.each(searchTextParts, function () {
                            isVisible = isVisible && (-1 !== text.indexOf(this));
                        });
                        $(this).toggleClass(activeClass, isVisible);
                    });
                }

                // Update tools actual visibility
                $targets.filter(':not(.' + activeClass + ')').hide();
                $targets.filter('.' + activeClass).show();
            };

            var toggleByTagText = function (tagText) {
                var $tagFilter = $tagFilters.filter('[data-tag-filter="' + tagText + '"]');
                $('[data-tag-filter="' + tagText + '"]').toggleClass(activeClass, !$tagFilter.hasClass(activeClass));
                updateCardsVisibility();
                updateCurrentFilters();
            };

            var filterBySearchText = function (searchText) {
                if (searchText !== $searchFiltersField.val()) {
                    $searchFiltersField.val(searchText);
                }
                updateCardsVisibility();
                updateCurrentFilters();
            };

            window.ToolFilter = {
                initiate: initiate,
                toggleByTagText: toggleByTagText,
                filterBySearchText: filterBySearchText
            };
        }());

        ToolFilter.initiate();
        
    });

}(jQuery));
