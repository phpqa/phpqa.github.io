---
layout:             'project'
title:              'Rector'
order:              'rector'
tags:               ['refactoring', 'upgrade']

authors:            [{name: 'Tomáš Votruba'}]

website:            [{url: 'https://www.tomasvotruba.cz/blog/2018/02/19/rector-part-1-what-and-how/'}] 
license:            [{url: 'https://github.com/rectorphp/rector/blob/master/LICENSE', label: 'MIT License'}] 
docs:               [{url: 'https://www.tomasvotruba.cz/blog/2018/02/19/rector-part-1-what-and-how/'}] 

github:             [{name: 'rectorphp/rector'}] 
packagist:          [{name: 'rector/rector'}]

dependencies:       []
composer-dev:       {command: 'vendor/bin/rector'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) instantly upgrades PHP & YAML code of your application,
with focus on open-source projects: PHP, CakePHP, Symfony, Sylius, PHPUnit, Twig, SilverStripe.

<!--more--> 

Rector can:

- Rename classes, methods and properties
- Rename partial namespace
- Rename pseudo-namespace to namespace
- Add, replace or remove arguments
- Add arguments or return typehint
- Change visibility of constant, property or method
- And much more...
