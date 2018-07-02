---
layout:             'project'
title:              'PhpCodeAnalyzer'
tags:               ['bugs finder', 'built-in php extensions', 'cli'] 

authors:            [{name: 'Sergei Vanyushin'}]

website:            [{url: 'https://github.com/wapmorgan/PhpCodeAnalyzer'}]
license:            [{url: 'https://github.com/wapmorgan/PhpCodeAnalyzer/blob/master/LICENSE.md', label: 'BSD 3-clause "New" or "Revised" License'}]

github:             [{name: 'wapmorgan/PhpCodeAnalyzer'}]
packagist:          [{name: 'wapmorgan/php-code-analyzer'}]               
dockerhub:          [{name: 'phpqa/phpca'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpca'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) finds usage of different non-built-in extensions in your php code.
 
<!--more--> 

This tool helps you understand how transportable your code between php installations is.
