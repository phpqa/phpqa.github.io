---
layout:             'project'
title:              'PHP Parallel Lint'
order:              'php parallel lint'
tags:               ['bugs finder', 'lint', 'parallel', 'cli']

authors:            [{name: 'Jakub Onderka'}] 

website:            [{url: 'https://github.com/JakubOnderka/PHP-Parallel-Lint'}]
license:            [{url: 'https://github.com/JakubOnderka/PHP-Parallel-Lint/blob/master/LICENSE', label: 'BSD 2-clause "Simplified" License'}]

github:             [{name: 'JakubOnderka/PHP-Parallel-Lint'}]
packagist:          [{name: 'jakub-onderka/php-parallel-lint'}]               
dockerhub:          [{name: 'phpqa/parallel-lint'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/parallel-lint'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) checks the syntax of PHP files faster than serial check, with a fancier output.

<!--more--> 

Running parallel jobs in PHP is inspired by Nette framework tests.
