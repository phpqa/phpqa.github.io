---
layout:             'project'
title:              'PHPLOC'
tags:               ['metrics', 'cli'] 

authors:            [{name: 'Sebastian Bergmann'}] 

website:            [{url: 'https://github.com/sebastianbergmann/phploc'}]
license:            [{url: 'https://github.com/sebastianbergmann/phploc/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}]

github:             [{name: 'sebastianbergmann/phploc'}]
packagist:          [{name: 'phploc/phploc'}]               
dockerhub:          [{name: 'phpqa/phploc'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phploc'}
phar:               {url: 'https://phar.phpunit.de/phploc.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a tool for quickly measuring the size and analyzing the structure of a PHP project.

<!--more--> 
