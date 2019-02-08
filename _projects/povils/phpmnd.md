---
layout:             'project'
title:              'PHP Magic Number Detector'
order:              'php magic number detector'
tags:               ['magic number', 'detection', 'cli']

authors:            [{name: 'Povilas Susinskas'}]

website:            [{url: 'https://github.com/povils/phpmnd'}]
license:            [{url: 'https://github.com/povils/phpmnd/blob/master/LICENSE', label: 'MIT license'}]

github:             [{name: 'povils/phpmnd'}]
packagist:          [{name: 'povils/phpmnd'}]

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpmnd'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) aims to help you to detect magic numbers in your PHP code.
 
<!--more--> 

A magic number is a numeric literal that is not defined as a constant,
but which may change at a later stage, and therefore can be hard to update.
It's considered a bad programming practice to use numbers directly in any source code without an explanation.
In most cases this makes programs harder to read, understand, and maintain.

By default 0 and 1 are not considered to be magic numbers.
