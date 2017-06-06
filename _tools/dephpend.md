---
layout:         tool
title:          dePHPend
authors:        [Michael Haeuslmann]
license:        {url: 'https://github.com/mihaeu/dephpend/blob/develop/LICENSE', label: 'MIT License'}
website:        {url: 'https://dephpend.com/'}
github:         {name: mihaeu/dephpend}
packagist:      {name: dephpend/dephpend}               
docker:         {name: phpqa/dephpend}     
command:        dephpend
tags:           [metrics, cli]
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) helps with bringing your PHP projects back in shape. 

<!--more-->
 
Over the course of a project, we usually keep adding more and more dependencies.
Often hidden behind singletons or service locators, these dependencies can quickly become a maintenance (and testing!) nightmare.
