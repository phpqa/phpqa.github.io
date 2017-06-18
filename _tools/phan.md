---
layout:         tool
title:          Phan
authors:        [Rasmus Lerdorf, Andrew Morrison]
website:        {url: 'https://github.com/etsy/phan'}
license:        {url: 'https://github.com/etsy/phan/blob/master/LICENSE', label: 'MIT License'}
github:         {name: etsy/phan}
packagist:      {name: etsy/phan}               
dockerhub:      [{name: phpqa/phan}]     
composer-dev:   {version: {'PHP 7.0': '0.8.x-dev', 'PHP 7.1': 'dev-master'}, command: 'phan'}
git:                {install-composer-dependencies: true, command: 'php phan'}
phar:           {url: {'X.X.X': 'https://github.com/etsy/phan/releases/download/X.X.X/phan.phar'}}
dependencies:   [pcntl, git, ext-ast]  
tags:           [bugs finder, static analysis, cli]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static analyzer for PHP.
 
<!--more--> 

Phan prefers to avoid false-positives and attempts to prove incorrectness rather than correctness.
