(function ($) {

    'use strict';

    $(function () {

        // Tool filters
        
        (function () {
            var $tools = $('.tool'),
                $toolFilters = $('.tool').find('[data-tool-tag-filter]'),
                $tagFilters = $('.tool_filters').find('[data-tool-tag-filter]'),
                $searchFiltersField = $('.tool_filters').find('[data-tool-search-filter]'),
                $currentFiltersContainer = $('.current_tool_filters'),
                activeClass = 'active';

            var initiate = function () {
                if ($tagFilters.length) {
                    $tagFilters.on('click', function (event) {
                        toggleByTagText($(this).data('tool-tag-filter'));
                        event.preventDefault();
                    });
                }
                if ($toolFilters.length) {
                    $toolFilters.on('click', function (event) {
                        toggleByTagText($(this).data('tool-tag-filter'));
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
                    return $(this).data('tool-tag-filter');
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
                    $closeAnchor = $('<a href="#" aria-label="Remove">');
                $closeAnchor
                    .html('&times;')
                    .data('tool-filter', filterText)
                    .on('click', function (event) {
                        closeCallback($(this).data('tool-filter'));
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

            var updateToolsVisibility = function () {
                // Filter tools with tag filters
                var activeFiltersLength = $tagFilters.filter('.' + activeClass).length;
                $tools.each(function () {
                    var isToolVisible = $(this).find('[data-tool-tag-filter].' + activeClass).length === activeFiltersLength;
                    $(this).toggleClass(activeClass, isToolVisible);
                });

                // Filter tools with search filters
                var searchText = $searchFiltersField.val();
                if ('' !== searchText) {
                    var searchTextParts = searchText.split(',');
                    searchTextParts = $.map(searchTextParts, function (partText) {
                        return $.trim(partText).toLowerCase();
                    });
                    $tools.filter('.' + activeClass).each(function () {
                        var isToolVisible = true,
                            toolText = $(this).text().toLowerCase();
                        $.each(searchTextParts, function () {
                            isToolVisible = isToolVisible && (-1 !== toolText.indexOf(this));
                        });
                        $(this).toggleClass(activeClass, isToolVisible);
                    });
                }

                // Update tools actual visibility
                $tools.filter(':not(.' + activeClass + ')').hide();
                $tools.filter('.' + activeClass).show();
            };

            var toggleByTagText = function (tagText) {
                var $tagFilter = $tagFilters.filter('[data-tool-tag-filter="' + tagText + '"]');
                $('[data-tool-tag-filter="' + tagText + '"]').toggleClass(activeClass, !$tagFilter.hasClass(activeClass));
                updateToolsVisibility();
                updateCurrentFilters();
            };

            var filterBySearchText = function (searchText) {
                if (searchText !== $searchFiltersField.val()) {
                    $searchFiltersField.val(searchText);
                }
                updateToolsVisibility();
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
