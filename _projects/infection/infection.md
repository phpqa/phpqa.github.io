---
layout:             'project'
title:              'Infection'
order:              'infection'
tags:               ['cli', 'testing', 'mutations']

authors:            [{name: 'Maks Rafalko'}]

website:            [{url: 'https://infection.github.io/'}] 
license:            [{url: 'https://github.com/infection/infection/blob/master/LICENSE', label: 'BSD 3-Clause License'}] 
docs:               [{url: 'https://infection.github.io/guide/index.html'}] 

github:             [{name: 'infection/infection'}] 
packagist:          [{name: 'infection/infection'}]
dockerhub:          [{name: 'phpqa/infection'}]

dependencies:       ['xdebug/phpdbg']
composer-dev:       {command: 'vendor/bin/infection'}
composer-global:    {command: 'infection'}
phar:               {url: 'https://github.com/infection/infection/releases/download/X.X.X/infection.phar'}

twitter:            [{name: 'infection_php'}]

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a PHP mutation testing framework based 
on AST (Abstract Syntax Tree) mutations.

<!--more--> 

{{ page.title }} runs your test suit, mutates the source code with a set of predefined mutators (mutation operators)
and collects the results of killed, escaped mutants and timeouts.

After running {{ page.title }}, you will receive a Mutation Score Indicator and your Mutation Code Coverage.

