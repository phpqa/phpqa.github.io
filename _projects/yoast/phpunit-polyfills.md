---
layout:             'project'
title:              'PHPUnit Polyfills'
order:              'phpunit polyfills'
tags:               ['phpunit', 'polyfill', 'testing']

authors:            [{name: 'Juliette Reinders Folmer'}]
companies:          [{name: 'Yoast'}]

website:            [{url: 'https://github.com/Yoast/PHPUnit-Polyfills/'}]
license:            [{url: 'https://github.com/Yoast/PHPUnit-Polyfills/blob/2.x/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}]

github:             [{name: 'Yoast/PHPUnit-Polyfills'}]
packagist:          [{name: 'yoast/phpunit-polyfills'}]

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpunit'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a set of polyfills for changed PHPUnit functionality to allow for creating PHPUnit cross-version compatible tests

<!--more--> 

This library is set up to allow for creating PHPUnit cross-version compatible tests by offering a number of polyfills for functionality which was introduced, split up or renamed in PHPUnit.

Write your tests for the latest PHPUnit and run them on a range of PHPUnit versions.

The polyfills have been setup to allow tests to be forward-compatible. What that means is, that your tests can use the assertions supported by the latest PHPUnit version, even when running on older PHPUnit versions.
