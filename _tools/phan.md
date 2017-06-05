---
layout: tool
title: Phan
authors: [Rasmus Lerdorf, Andrew Morrison]
license: MIT License            
license-url: https://github.com/etsy/phan/blob/master/LICENSE
website: https://github.com/etsy/phan
source: https://github.com/etsy/phan
packagist: etsy/phan
docker: phpqa/phan
command: phan
dependencies: [pcntl,git,php-ast]  
tags: [bugs finder, static analysis, cli]
comments: true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) is a static analyzer for PHP.
 
<!--more--> 

Phan prefers to avoid false-positives and attempts to prove incorrectness rather than correctness.
