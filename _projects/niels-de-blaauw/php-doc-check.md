---
layout:             'project'
title:              'PHP Doc Check'
order:              'php-doc-check'
tags:               ['cli', 'static analysis', 'validation', 'coding standards']

authors:            [{name: 'Niels de Blaauw'}]

website:            [{url: 'https://github.com/NielsdeBlaauw/php-doc-check/'}] 
license:            [{url: 'https://github.com/NielsdeBlaauw/php-doc-check/blob/master/LICENSE', label: 'MIT License'}] 

github:             [{name: 'NielsdeBlaauw/php-doc-check'}] 
packagist:          [{name: 'niels-de-blaauw/php-doc-check'}]

dependencies:       []
composer-dev:       {command: 'vendor/bin/php-doc-check'}
composer-global:    {command: 'php-doc-check'}
phar:               {url: {'X.X.X': 'https://github.com/NielsdeBlaauw/php-doc-check/releases/download/vX.X.X/php-doc-check.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) uses complexity metrics to enforce documentation conventions on non-trivial functions.

<!--more--> 

PHP Doc Check is an automated command line tool to determine which functions and methods could use some more documentation.

Complexity metrics are used to find complex functions.

You can gradually improve documenation on projects by starting with relatively high limits and slowly moving these limits down.