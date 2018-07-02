---
layout:             'project'
title:              'PHPStan - PHP Static Analysis Tool'
tags:               ['bugs finder', 'static analysis', 'cli'] 

authors:            [{name: 'Ondřej Mirtes'}]  

website:            [{url: 'https://medium.com/@ondrejmirtes/phpstan-2939cd0ad0e3'}]
license:            [{url: 'https://github.com/phpstan/phpstan/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'phpstan/phpstan'}]
packagist:          [{name: 'phpstan/phpstan'}]               
dockerhub:          [{name: 'phpstan/phpstan'}, {name: 'phpqa/phpstan'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpstan'}
phar:               {url: {'X.X.X': 'https://github.com/phpstan/phpstan/releases/download/X.X/phpstan-X.X.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) focuses on finding errors in your code without actually running it.
 
<!--more--> 

It catches whole classes of bugs even before you write tests for the code.
