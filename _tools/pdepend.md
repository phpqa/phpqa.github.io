---
layout:             'tool'
title:              'PHP_Depend'
authors:            ['Manuel Pichler']
tags:               ['metrics', 'cli']

website:            {url: 'https://pdepend.org/'}
license:            {url: 'https://github.com/pdepend/pdepend/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}

github:             {name: 'pdepend/pdepend'}
packagist:          {name: 'pdepend/pdepend'}               
dockerhub:          [{name: 'phpqa/pdepend'}]     

dependencies:       []
phar:               {url: 'https://static.pdepend.org/php/latest/pdepend.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) shows you the quality of your design in the terms of extensibility, reusability and maintainability.

<!--more--> 

It is an adaption of the established Java development tool JDepend.
