---
layout:         tool
title:          Parse - A PHP Security Scanner
authors:        [Chris Cornutt]
license:        {url: 'https://github.com/psecio/parse/blob/master/README.md', label: 'MIT license'}
website:        {url: 'https://github.com/psecio/parse'}
github:         {name: psecio/parse}
packagist:      {name: psecio/parse}          
docker:         {name: phpqa/psecio-parse}     
command:        psecio-parse 
tags:           [alpha, bugs finder, cli] 
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) is a static scanning tool to review your PHP code for potential security-related issues.
 
<!--more--> 

A static scanner means that the code is not executed and tested via a web interface (that's dynamic testing).
Instead, the scanner looks through your code and checks for certain markers and notifies you when any are found.

**This tool is still in a very early stage. The work continues...**
