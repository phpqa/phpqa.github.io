---
layout:         tool
title:          atoum
authors:        [Frédéric Hardy, Julien Bianchi]
website:        {url: 'http://atoum.org/'}
license:        {url: 'https://github.com/atoum/atoum/blob/master/LICENSE', label: 'BSD 3'}
github:         {name: atoum/atoum}
packagist:      {name: atoum/atoum}               
dockerhub:      [{name: atoum/atoum}]
docs:           {url: 'http://docs.atoum.org'}
command:        atoum
git:            {composer-install: true, command: 'bin/atoum'}
phar:           {url: {'X.X.X': 'https://github.com/atoum/atoum/releases/download/X.X.X/atoum.phar'}}
dependencies:   []
tags:           [testing, cli]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a modern and intuitive testing framework for PHP.

<!--more--> 

A simple, modern and intuitive unit testing framework for PHP.

Just like SimpleTest or PHPUnit, atoum is a unit testing framework specific to the PHP language. However, it has been designed from the start up with the following ideas in mind:
* Can be implemented rapidly,
* Simplifies test development,
* Allows for writing reliable, readable, and clear unit tests.

It allows to run your tests in several [different modes](http://atoum.org/features.html#execution-engines):
in parallel, in concurrency, or simply one by one.
 
It also ships with several helping tools for a developer in their day-to-day usage.
