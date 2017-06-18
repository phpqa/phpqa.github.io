---
layout:             'project'
title:              'PhpMetrics'
authors:            ['Jean-François Lépine']
tags:               ['metrics', 'cli'] 

website:            {url: 'http://www.phpmetrics.org/'}
license:            {url: 'https://github.com/phpmetrics/PhpMetrics/blob/master/LICENSE', label: 'MIT License'}
demo:               {url: 'http://www.phpmetrics.org/report/latest/index.html'}

github:             {name: 'phpmetrics/PhpMetrics'}
packagist:          {name: 'phpmetrics/phpmetrics'}               
dockerhub:          [{name: 'phpqa/phpmetrics'}]     

dependencies:       []
composer-global:    {command: 'phpmetrics'}
phar:               {url: {'master': 'https://github.com/phpmetrics/PhpMetrics/blob/master/releases/phpmetrics.phar?raw=true', 'X.X.X': 'https://github.com/phpmetrics/PhpMetrics/releases/download/vX.X.X/phpmetrics.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) provides [software metrics](http://en.wikipedia.org/wiki/Software_metric) about PHP project and classes.

<!--more-->
 
It generates readable and accessible reports about maintainability, quality and complexity of a source code.
