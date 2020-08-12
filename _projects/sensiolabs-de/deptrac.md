---
layout:             'project'
title:              'Deptrac'
order:              'deptrac'
tags:               ['dependencies', 'rules']

companies:          [{name: 'SensioLabs'}] 
authors:            [{name: 'Tim Glabisch'}, {name: 'Simon Mönch'}]  

website:            [{url: 'https://github.com/sensiolabs-de/deptrac'}]
license:            [{url: 'LICENCE.md', label: 'MIT License'}]

github:             [{name: 'sensiolabs-de/deptrac'}]
packagist:          [{name: 'sensiolabs-de/deptrac-shim'}] 

dependencies:       ['graphviz']
composer-dev:       {command: 'vendor/bin/deptrac'}
phar:               {url: {'master': 'https://github.com/sensiolabs-de/deptrac/releases/download/0.6.0/deptrac.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static code analysis tool that helps to enforce rules
for dependencies between software layers in your PHP projects.

<!--more--> 
