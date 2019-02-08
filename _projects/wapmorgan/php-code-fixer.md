---
layout:             'project'
title:              'PhpCodeFixer'
order:              'phpcodefixer'
tags:               ['bugs finder', 'deprecated functions', 'php compatibility', 'cli'] 

authors:            [{name: 'Sergei Vanyushin'}]

website:            [{url: 'https://github.com/wapmorgan/PhpCodeFixer'}]
license:            [{url: 'https://github.com/wapmorgan/PhpCodeFixer/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}]

github:             [{name: 'wapmorgan/PhpCodeFixer'}]
packagist:          [{name: 'wapmorgan/php-code-fixer'}]               
dockerhub:          [{name: 'phpqa/phpcf'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpcf'} 
composer-global:    {command: 'phpcf'} 

---

[{{ page.title }}]({{ page.url | absolute_url }}) finds deprecated functions, wrong functions usage, variables, ini directives and restricted identifiers in your php code.
 
<!--more--> 

It literally helps you fix code that can fail after migration to PHP 7.
