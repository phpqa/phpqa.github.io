---
layout:         tool
title:          PHP Parallel Lint
authors:        [Jakub Onderka]
license:        {url: 'https://github.com/JakubOnderka/PHP-Parallel-Lint/blob/master/LICENSE', label: 'BSD 2-clause "Simplified" License'}
website:        {url: 'https://github.com/JakubOnderka/PHP-Parallel-Lint'}
github:         {name: JakubOnderka/PHP-Parallel-Lint}
packagist:      {name: jakub-onderka/php-parallel-lint}               
docker:         {name: phpqa/parallel-lint}     
command:        parallel-lint
tags:           [bugs finder, lint, parallel, cli]
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) checks the syntax of PHP files faster than serial check, with a fancier output.

<!--more--> 

Running parallel jobs in PHP is inspired by Nette framework tests.
