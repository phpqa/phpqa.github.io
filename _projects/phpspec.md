---
layout:             'project'
title:              'PHPSpec'
tags:               ['testing', 'specification']

authors:            [{name: 'Konstantin Kudryashov'}, {name: 'Marcello Duarte'}, {name: 'Ciaran McNulty'}] 

website:            [{url: 'https://www.phpspec.net/'}] 
license:            [{url: 'https://github.com/phpspec/phpspec/blob/master/LICENSE', label: 'MIT'}] 
docs:               [{url: 'https://www.phpspec.net/en/latest/manual/introduction.html'}] 

dependencies:       [{label: 'prophecy'}]
github:             [{name: 'phpspec/phpspec'}] 
packagist:          [{name: 'phpspec/phpspec'}]
composer-dev:       {command: 'vendor/bin/phpspec'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a tool which can help you write
clean and working PHP code using Behaviour Driven Development (BDD). 

<!--more--> 

BDD is a technique derived from test-first development. BDD is a technique used at story level and spec level.
phpspec is a tool for use at the spec level or SpecBDD.
The technique is to first use a tool like phpspec to describe the behaviour of an object you are about to write.
Next you write just enough code to meet that specification and finally you refactor this code.
