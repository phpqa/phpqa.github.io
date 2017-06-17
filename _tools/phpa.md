---
layout:         tool
title:          PHP Assumptions
authors:        [Rick Kuipers] 
website:        {url: 'https://github.com/rskuipers/php-assumptions'}
license:        {url: 'https://github.com/rskuipers/php-assumptions/blob/master/LICENSE', label: 'MIT License'}
github:         {name: rskuipers/php-assumptions}
packagist:      {name: rskuipers/php-assumptions}               
dockerhub:      [{name: phpqa/phpa}]     
command:        phpa  
composer-dev:   {command: 'vendor/bin/phpa'}  
dependencies:   []
tags:           [static analysis, bugs finder, validation, assumptions, cli]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static code analysis tool doing checks for weak assumptions.

<!--more--> 

It is the result of a proof of concept inspired by the "[From assumptions to assertions](http://rskuipers.com/entry/from-assumptions-to-assertions)" blog post.
