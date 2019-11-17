---
layout:             'project'
title:              'PHP Architecture Tester'
order:              'phpat'
tags:               ['static analysis', 'testing', 'cli']

authors:            [{name: 'Carlos Alandete Sastre'}]

website:            [{url: 'https://github.com/carlosas/phpat'}] 
license:            [{url: 'https://github.com/carlosas/phpat/blob/master/LICENSE', label: 'MIT License'}]
docs:               [{url: 'https://github.com/carlosas/phpat/blob/master/README.md'}] 

github:             [{name: 'carlosas/phpat'}] 
packagist:          [{name: 'carlosas/phpat'}]

dependencies:       []
composer-dev:       {command: 'vendor/bin/phpat'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is an easy to use architecture testing tool for PHP.
 
<!--more-->

{{ page.title }} provides a natural language abstraction to define your own architecture rules and test them against your software.
