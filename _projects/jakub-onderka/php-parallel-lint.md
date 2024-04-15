---
layout:             'project'
title:              'PHP Parallel Lint'
order:              'php parallel lint'
tags:               ['bugs finder', 'lint', 'parallel', 'cli']

authors:            [{name: 'Jakub Onderka'}, {name: 'Václav Makeš'}, {name: 'Juliette Reinders Folmer'}] 

website:            [{url: 'https://github.com/php-parallel-lint/PHP-Parallel-Lint'}]
license:            [{url: 'https://github.com/php-parallel-lint/PHP-Parallel-Lint/blob/master/LICENSE', label: 'BSD 2-clause "Simplified" License'}]

github:             [{name: 'php-parallel-lint/PHP-Parallel-Lint'}]
packagist:          [{name: 'php-parallel-lint/php-parallel-lint'}]
dockerhub:          [{name: 'phpqa/parallel-lint'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/parallel-lint'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) checks the syntax of PHP files faster than serial check, with a fancier output.

<!--more--> 

Running parallel jobs in PHP is inspired by Nette framework tests.
