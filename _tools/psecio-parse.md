---
layout:         tool
title:          Parse - A PHP Security Scanner
authors:        [Chris Cornutt]
website:        {url: 'https://github.com/psecio/parse'}
license:        {url: 'https://github.com/psecio/parse/blob/master/README.md', label: 'MIT license'}
github:         {name: psecio/parse}
packagist:      {name: psecio/parse}          
dockerhub:      [{name: phpqa/psecio-parse}]     
composer-dev:   {command: 'vendor/bin/psecio-parse'} 
dependencies:   []
tags:           [alpha, bugs finder, cli] 
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static scanning tool to review your PHP code for potential security-related issues.
 
<!--more--> 

A static scanner means that the code is not executed and tested via a web interface (that's dynamic testing).
Instead, the scanner looks through your code and checks for certain markers and notifies you when any are found.

**This tool is still in a very early stage. The work continues...**
