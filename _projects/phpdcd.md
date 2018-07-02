---
layout:             'project'
title:              'PHP Dead Code Detector'
tags:               ['unmaintained', 'dead code detection', 'cli'] 

authors:            [{name: 'Sebastian Bergmann'}] 

website:            [{url: 'https://github.com/sebastianbergmann/phpdcd'}]
license:            [{url: 'https://github.com/sebastianbergmann/phpdcd/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}]

github:             [{name: 'sebastianbergmann/phpdcd'}]
packagist:          [{name: 'sebastian/phpdcd'}]               
dockerhub:          [{name: 'phpqa/phpdcd'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpdcd'}
composer-global:    {command: 'phpdcd'}
phar:               {url: 'https://phar.phpunit.de/phpdcd.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a Dead Code Detector (DCD) for PHP code.
 
<!--more--> 

It scans a PHP project for all declared functions and methods and reports those as being "dead code" that are not called at least once.

**This project is no longer maintained and its repository is only kept for archival purposes.**
