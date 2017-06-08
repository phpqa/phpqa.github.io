---
layout:         tool
title:          Phan
authors:        [Rasmus Lerdorf, Andrew Morrison]
website:        {url: 'https://github.com/etsy/phan'}
license:        {url: 'https://github.com/etsy/phan/blob/master/LICENSE', label: 'MIT License'}
github:         {name: etsy/phan}
packagist:      {name: etsy/phan}               
dockerhub:      {name: phpqa/phan}     
command:        phan
dependencies:   [pcntl,git,php-ast]  
tags:           [bugs finder, static analysis, cli]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static analyzer for PHP.
 
<!--more--> 

Phan prefers to avoid false-positives and attempts to prove incorrectness rather than correctness.
