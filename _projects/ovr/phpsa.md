---
layout:             'project'
title:              'Smart Analyzer for PHP'
order:              'smart analyzer for php'
tags:               ['alpha', 'bugs finder', 'static analysis', 'cli'] 

authors:            [{name: 'Dmitry Patsura'}] 

website:            [{url: 'https://phpsa.dmtry.me/'}]
license:            [{url: 'https://github.com/ovr/phpsa/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'ovr/phpsa'}]
packagist:          [{name: 'ovr/phpsa'}]               
dockerhub:          [{name: 'phpqa/phpsa'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpsa'}
git:                {install-composer-dependencies: true, command: 'bin/phpsa'}
phar:               {url: {'X.X.X': 'https://github.com/ovr/phpsa/releases/download/X.X.X/phpsa.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a development tool aimed at bringing complex analysis for PHP applications and libraries.

<!--more--> 

**This software is currently in early alpha state.**
