---
layout:         tool
title:          Phan
authors:        [Rasmus Lerdorf, Andrew Morrison]
license:        {url: 'https://github.com/etsy/phan/blob/master/LICENSE', label: 'MIT License'}
website:        {url: 'https://github.com/etsy/phan'}
source:         {url: 'https://github.com/etsy/phan'}
packagist:      {url: 'https://packagist.org/packages/etsy/phan', label: 'etsy/phan'}
docker:         {url: 'https://hub.docker.com/r/phpqa/phan', label: 'phpqa/phan'}
command:        phan
dependencies:   [pcntl,git,php-ast]  
tags:           [bugs finder, static analysis, cli]
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) is a static analyzer for PHP.
 
<!--more--> 

Phan prefers to avoid false-positives and attempts to prove incorrectness rather than correctness.
