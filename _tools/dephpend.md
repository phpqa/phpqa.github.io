---
layout:             'tool'
title:              'dePHPend'
authors:            ['Michael Haeuslmann'] 
tags:               ['metrics', 'cli']

website:            {url: 'https://dephpend.com/'}
license:            {url: 'https://github.com/mihaeu/dephpend/blob/develop/LICENSE', label: 'MIT License'}

github:             {name: 'mihaeu/dephpend'}
packagist:          {name: 'dephpend/dephpend'}               
dockerhub:          [{name: 'phpqa/dephpend'}]     

dependencies:       []
composer-global:    {version: 'dev-master', command: 'dephpend'}
git:                {install-composer-dependencies: true, command: 'bin/dephpend'}
phar:               {url: 'https://phar.dephpend.com/dephpend.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) helps with bringing your PHP projects back in shape. 

<!--more-->
 
Over the course of a project, we usually keep adding more and more dependencies.
Often hidden behind singletons or service locators, these dependencies can quickly become a maintenance (and testing!) nightmare.
