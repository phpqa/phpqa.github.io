---
layout:             'project'
title:              'GrumPHP'
order:              'grumphp'
tags:               ['git hooks', 'commit']

companies:          [{name: 'Phpro'}]

website:            [{url: 'https://github.com/phpro/grumphp'}] 
license:            [{url: 'https://github.com/phpro/grumphp/blob/master/LICENSE', label: 'MIT License'}] 

github:             [{name: 'phpro/grumphp'}] 
packagist:          [{name: 'phpro/grumphp'}]

dependencies:       ['git']
composer-dev:       {command: 'vendor/bin/grumphp'}
composer-global:    {command: 'grumphp'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) will register some git hooks in your package repository.
When somebody commits changes, GrumPHP will run some tests on the committed code.
 
<!--more-->

If the tests fail, you won't be able to commit your changes.
This handy tool will not only improve your codebase, it will also teach your co-workers to write better code
following the best practices you've determined as a team. 

Watch out! GrumPHP is sniffing your commits!
