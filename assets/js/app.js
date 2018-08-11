if (!Array.prototype.includes) {
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    Object.defineProperty(Array.prototype, 'includes', {
        value: function (searchElement, fromIndex) {

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }

            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;

            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }

            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }

            // 8. Return false
            return false;
        }
    });
}

if (!Array.prototype.reduce) {
    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
    Object.defineProperty(Array.prototype, 'reduce', {
        value: function (callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce ' +
                    'called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback +
                    ' is not a function');
            }

            // 1. Let O be ? ToObject(this value).
            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // Steps 3, 4, 5, 6, 7
            var k = 0;
            var value;

            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in o)) {
                    k++;
                }

                // 3. If len is 0 and initialValue is not present,
                //    throw a TypeError exception.
                if (k >= len) {
                    throw new TypeError('Reduce of empty array ' +
                        'with no initial value');
                }
                value = o[k++];
            }

            // 8. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kPresent be ? HasProperty(O, Pk).
                // c. If kPresent is true, then
                //    i.  Let kValue be ? Get(O, Pk).
                //    ii. Let accumulator be ? Call(
                //          callbackfn, undefined,
                //          « accumulator, kValue, k, O »).
                if (k in o) {
                    value = callback(value, o[k], k, o);
                }

                // d. Increase k by 1.
                k++;
            }

            // 9. Return accumulator.
            return value;
        }
    });
}

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function indexOf(member, startFrom) {
        /*
        In non-strict mode, if the `this` variable is null or undefined, then it is
        set to the window object. Otherwise, `this` is automatically converted to an
        object. In strict mode, if the `this` variable is null or undefined, a
        `TypeError` is thrown.
        */
        if (this == null) {
            throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
        }

        var
            index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
            that = this instanceof Object ? this : new Object(this),
            length = isFinite(that.length) ? Math.floor(that.length) : 0;

        if (index >= length) {
            return -1;
        }

        if (index < 0) {
            index = Math.max(length + index, 0);
        }

        if (member === undefined) {
            /*
              Since `member` is undefined, keys that don't exist will have the same
              value as `member`, and thus do need to be checked.
            */
            do {
                if (index in that && that[index] === undefined) {
                    return index;
                }
            } while (++index < length);
        } else {
            do {
                if (that[index] === member) {
                    return index;
                }
            } while (++index < length);
        }

        return -1;
    };
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        'use strict';
        if (!((typeof func === 'Function' || typeof func === 'function') && this))
            throw new TypeError();

        var len = this.length >>> 0,
            res = new Array(len), // preallocate array
            t = this, c = 0, i = -1;
        if (thisArg === undefined) {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func(t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }
        else {
            while (++i !== len) {
                // checks to see if the key was set
                if (i in this) {
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = t[i];
                    }
                }
            }
        }

        res.length = c; // shrink down array to proper size
        return res;
    };
}

var searchStore = {
    state: {
        sortBy: 'title',
        sortOrder: 'asc',
        projects: projects,
        searchText: '',
        activeTags: [],
        projectIdsFromProjectsVisibleFromActiveTags: [],
        projectIdsFromProjectsVisibleFromTextFilter: [],
        sortParametersPerProjectId: {}
    },
    getProjects: function () {
        var self = this;
        return this.state.projects.sort(function (a, b) {
            var sortBy = self.state.sortBy;
            var sortOrder = 'asc' === self.state.sortOrder ? +1 : -1;

            var sourceA = self.state.sortParametersPerProjectId[a.id];
            if ('undefined' === typeof sourceA || 'undefined' === typeof sourceA[sortBy]) {
                if ('undefined' !== typeof a[sortBy]) {
                    sourceA = a;
                } else {
                    return sortOrder * -1;
                }
            }

            var sourceB = self.state.sortParametersPerProjectId[b.id];
            if ('undefined' === typeof sourceB || 'undefined' === typeof sourceB[sortBy]) {
                if ('undefined' !== typeof b[sortBy]) {
                    sourceB = b;
                } else {
                    return sortOrder;
                }
            }

            if (sourceA[sortBy] < sourceB[sortBy]) {
                return sortOrder * -1;
            }
            if (sourceA[sortBy] > sourceB[sortBy]) {
                return sortOrder;
            }
            return 0;
        });
    },
    getTags: function () {
        var tags = [];
        var projects = this.state.projects;
        for (var projectIndex in projects) {
            if (!projects.hasOwnProperty(projectIndex)) {
                continue;
            }
            var project = projects[projectIndex];
            for (var tagIndex in project.tags) {
                var tag = project.tags[tagIndex];
                if (!tags.includes(tag)) {
                    tags.push(tag);
                }
            }
        }
        return tags.sort();
    },
    isFilterActive: function () {
        return 0 !== this.state.activeTags.length || '' !== this.state.searchText;
    },
    getActiveTags: function () {
        return this.state.activeTags;
    },
    isTagActive: function (tag) {
        return this.state.activeTags.includes(tag);
    },
    toggleTag: function (tag) {
        if (this.state.activeTags.includes(tag)) {
            this.state.activeTags.splice(this.state.activeTags.indexOf(tag), 1);
        } else {
            this.state.activeTags.push(tag);
        }
        this.updateProjectsVisibleFromActiveTags();
    },
    deactivateAllTags: function () {
        this.state.activeTags = [];
        this.updateProjectsVisibleFromActiveTags();
    },
    activateOnlyOneTag: function (tag) {
        this.deactivateAllTags();
        if ('all' !== tag) {
            this.toggleTag(tag);
        }
    },
    getSearchText: function () {
        return this.state.searchText;
    },
    searchText: function (text) {
        this.state.searchText = text;
        this.updateProjectsVisibleFromTextFilter();
    },

    updateProjectsVisibleFromActiveTags: function () {
        var self = this;
        this.state.projectIdsFromProjectsVisibleFromActiveTags = this.state.projects.filter(function (project) {
            return project.tags.filter(function (tag) {
                return self.state.activeTags.includes(tag);
            }).length === self.state.activeTags.length;
        }).map(function (project) {
            return project.id;
        });
    },
    updateProjectsVisibleFromTextFilter: function () {
        var text = this.state.searchText;
        var returnValue = function (value) {
            return value;
        };
        var joinValues = function (value) {
            return value.join(' ');
        };
        var returnLabelProperty = function (value) {
            return value.map(function (item) {
                return item.label ? (item.label) : '';
            });
        };
        var returnNameProperty = function (value) {
            return value.map(function (item) {
                return item.name;
            });
        };
        var searchableProperties = {
            'title': returnValue,
            'excerpt': returnValue,
            'tags': joinValues,
            'authors': returnNameProperty,
            'companies': returnNameProperty,
            'website': returnLabelProperty,
            'license': returnLabelProperty,
            'terms': returnLabelProperty,
            'wiki': returnLabelProperty,
            'docs': returnLabelProperty,
            'demo': returnLabelProperty,
            'github': returnNameProperty,
            'packagist': returnNameProperty,
            'dockerhub': returnNameProperty
        };
        var lcTextParts = text.toLowerCase().split(',');
        this.state.projectIdsFromProjectsVisibleFromTextFilter = this.state.projects.filter(function (project) {
            var searchableText = '';
            for (var searchableProperty in searchableProperties) {
                var callback = searchableProperties[searchableProperty];
                if ('undefined' !== typeof project[searchableProperty]) {
                    searchableText += ' ' + callback(project[searchableProperty]);
                }
            }
            var lcSearchableText = searchableText.toLowerCase();
            return lcTextParts.filter(function (lcTextPart) {
                return lcSearchableText.indexOf(lcTextPart) !== -1;
            }).length === lcTextParts.length;
        }).map(function (project) {
            return project.id;
        });
    },

    isProjectVisibleFromActiveTags: function (project) {
        return 0 === this.state.activeTags.length
            || this.state.projectIdsFromProjectsVisibleFromActiveTags.includes(project.id);
    },
    isProjectVisibleAfterTextFilter: function (project) {
        return '' === this.state.searchText
            || this.state.projectIdsFromProjectsVisibleFromTextFilter.includes(project.id);
    },
    isProjectVisible: function (project) {
        return this.isProjectVisibleFromActiveTags(project) && this.isProjectVisibleAfterTextFilter(project);
    },

    countProjectsForTag: function (tag) {
        return this.state.projects.filter(function (project) {
            return 'all' === tag || project.tags.includes(tag);
        }).length;
    },
    countVisibleProjectsForTag: function (tag) {
        var self = this;
        return this.state.projects.filter(function (project) {
            return ('all' === tag || project.tags.includes(tag)) && self.isProjectVisible(project);
        }).length;
    },

    addSortParameter: function (parameter, id, value) {
        if ('undefined' === typeof this.state.sortParametersPerProjectId[id]) {
            this.state.sortParametersPerProjectId[id] = {};
        }
        this.state.sortParametersPerProjectId[id][parameter] = value;
    },
    getCurrentSortBy: function () {
        return this.state.sortBy;
    },
    getCurrentSortOrder: function () {
        return this.state.sortOrder;
    },
    switchSort: function (sortBy, defaultSortOrder) {
        if (this.state.sortBy !== sortBy) {
            this.state.sortOrder = defaultSortOrder;
        } else {
            this.state.sortOrder = 'asc' === this.state.sortOrder ? 'desc' : 'asc';
        }
        this.state.sortBy = sortBy;
    }
};

Vue.component('sort-dropdown', {
    props: ['items'],
    data: function () {
        return {
            searchStore: searchStore
        };
    },
    methods: {
        switchSort: function (sortBy, defaultSortOrder) {
            this.searchStore.switchSort(sortBy, defaultSortOrder);
        },
        switchSortOrder: function () {
            this.searchStore.switchSort(this.currentSortBy, this.currentSortOrder);
        }
    },
    computed: {
        currentSortBy: function () {
            return this.searchStore.getCurrentSortBy();
        },
        currentSortOrder: function () {
            return this.searchStore.getCurrentSortOrder();
        },
        isAscending: function () {
            return 'asc' === this.searchStore.getCurrentSortOrder();
        },
        isDescending: function () {
            return 'asc' !== this.searchStore.getCurrentSortOrder();
        }
    }
});

Vue.component('tag', {
    props: ['tag'],
    data: function () {
        return {
            searchStore: searchStore
        };
    },
    methods: {
        toggle: function () {
            this.searchStore.toggleTag(this.tag);
        },
        activateExclusively: function () {
            this.searchStore.searchText('');
            this.searchStore.activateOnlyOneTag(this.tag);
        }
    },
    computed: {
        isAnyFilterActive: function () {
            return this.searchStore.isFilterActive();
        },
        active: function () {
            return this.searchStore.isTagActive(this.tag);
        },
        projectsCounter: function () {
            return this.searchStore.countProjectsForTag(this.tag);
        },
        visibleProjectsCounter: function () {
            return this.searchStore.countVisibleProjectsForTag(this.tag);
        }
    }
});

Vue.component('project-card', {
    props: ['project'],
    data: function () {
        return {
            searchStore: searchStore,
            gitHubWatchers: 0,
            gitHubStars: 0,
            gitHubForks: 0
        }
    },
    computed: {
        authors: function () {
            return this.project.authors ? this.project.authors.map(function (author) {
                return author.name;
            }).join(', ') : null;
        },
        companies: function () {
            return this.project.companies ? this.project.companies.map(function (company) {
                return company.name;
            }).join(', ') : null;
        },
        resources: function () {
            var resources = [];
            var resourceProperties = {
                'website': {'label': 'Website'},
                'license': {'label': 'License'},
                'terms': {'label': 'Terms (Of Service)'},
                'wiki': {'label': 'Wiki'},
                'docs': {'label': 'Documentation'},
                'demo': {'label': 'Demo'},
                'github': {'label': 'GitHub', 'urlPrefix': 'https://github.com/'},
                'packagist': {'label': 'Packagist', 'urlPrefix': 'https://packagist.org/packages/'},
                'dockerhub': {'label': 'DockerHub', 'urlPrefix': 'https://hub.docker.com/r/'}
            };
            for (var property in resourceProperties) {
                var settings = resourceProperties[property];
                if ('undefined' !== typeof this.project[property]) {
                    // Merge the mapped values into the resources array
                    resources = resources.concat(this.project[property].map(
                        // Make sure the property and settings are not changed
                        (function (property, settings) {
                            // Return the actual mapping function
                            return function (item) {
                                // Return the mapped value
                                return {
                                    'type': property,
                                    'label': settings['label'],
                                    // If a label is not found, return the default label
                                    'title': item.label ? item.label : settings['label'],
                                    // Cascade through the name and the label, otherwise stick with the url
                                    'mask': item.name ? item.name : (item.label ? item.label : item.url),
                                    // If a url is not found, create it from the prefix and the name
                                    'url': item.url ? item.url : (settings['urlPrefix'] + item.name)
                                };
                            };
                        }(property, settings))
                    ));
                }
            }
            return resources;
        },
        dependencies: function () {
            return this.project.dependencies ? this.project.dependencies.join(', ') : null;
        },
        gitHubUrl: function () {
            if (this.project.github[0].url) {
                return this.project.github[0].url;
            }
            if (this.project.github[0].name) {
                return 'https://github.com/' + this.project.github[0].name;
            }
            return null;
        },
        absoluteProjectUrl: function () {
            return location.origin + this.project.url;
        },
        visible: function () {
            return this.searchStore.isProjectVisible(this.project);
        }
    },
    created: function () {
        // axios.get('https://api.github.com/repos/' + gitHubName).headers({Accept: 'application/vnd.github.v3+json'})...
        if (this.project.packagist && this.project.packagist.length > 0) {
            var packagistName = this.project.packagist[0].name;
            var self = this;
            axios.get('https://packagist.org/packages/' + packagistName + '.json').then((function (self) {
                return function (response) {
                    self.gitHubWatchers = response.data.package.github_watchers;
                    self.gitHubStars = response.data.package.github_stars;
                    self.gitHubForks = response.data.package.github_forks;
                    self.searchStore.addSortParameter('github-watchers', self.project.id, response.data.package.github_watchers);
                    self.searchStore.addSortParameter('github-stars', self.project.id, response.data.package.github_stars);
                    self.searchStore.addSortParameter('github-forks', self.project.id, response.data.package.github_forks);
                };
            }(self)));
        } else {
            this.searchStore.addSortParameter('github-watchers', this.project.id, 0);
            this.searchStore.addSortParameter('github-stars', this.project.id, 0);
            this.searchStore.addSortParameter('github-forks', this.project.id, 0);
        }
    }
});

Vue.component('search-field', {
    props: [],
    data: function () {
        return {
            searchStore: searchStore
        }
    },
    methods: {
        search: function (event) {
            return this.searchStore.searchText(event.target.value);
        },
        clearSearch: function (event) {
            return this.searchStore.searchText('');
        }
    },
    computed: {
        searchText: function () {
            return this.searchStore.getSearchText();
        },
        filteredProjectsCounter: function () {
            return this.searchStore.countVisibleProjectsForTag('all');
        }
    }
});

var app = new Vue({
    delimiters: ["((", "))"],
    el: '#main',
    data: {
        searchStore: searchStore
    },
    computed: {
        projects: function () {
            return this.searchStore.getProjects();
        },
        tags: function () {
            return this.searchStore.getTags();
        },
        activeTags: function () {
            return this.searchStore.getActiveTags();
        },
        visibleProjectsCounter: function () {
            return this.searchStore.countVisibleProjectsForTag('all');
        }
    }
});






