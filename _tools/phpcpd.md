---
layout:         tool
title:          PHP Copy/Paste Detector
authors:        [Sebastian Bergmann]
license:        {url: 'https://github.com/sebastianbergmann/phpcpd/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
website:        {url: 'https://github.com/sebastianbergmann/phpcpd'}
github:         {name: sebastianbergmann/phpcpd}
packagist:      {name: sebastian/phpcpd}               
docker:         {name: phpqa/phpcpd}     
command:        phpcpd
tags:           [bugs finder, dry, code duplication, cli] 
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) is a Copy/Paste Detector for PHP code.

<!--more--> 

It scans a PHP project for [duplicated code](http://en.wikipedia.org/wiki/Duplicate_code), in order to "Don't Repeat Yourself" (DRY).
