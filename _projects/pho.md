---
layout:             'project'
title:              'Pho'
tags:               ['testing', 'bdd']

authors:            [{name: 'Daniel St. Jules'}] 

website:            [{url: 'https://github.com/danielstjules/pho'}] 
license:            [{url: 'https://github.com/danielstjules/pho/blob/master/LICENSE', label: 'MIT'}] 

github:             [{name: 'danielstjules/pho'}] 
packagist:          [{name: 'danielstjules/pho'}]

dependencies:       []
composer-global:    {command: 'pho'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a BDD test framework for PHP, inspired by Jasmine and RSpec.

<!--more-->

It features a familiar syntax, and a watch command to automatically re-run specs during development.
It can also be extended with custom matchers and reporters.
