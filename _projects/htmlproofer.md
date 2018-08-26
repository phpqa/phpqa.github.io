---
layout:             'project'
title:              'HTMLProofer'
order:              'htmlproofer'
tags:               ['html', 'lint']

authors:            [{name: 'Garen Torikian'}] 

website:            [{url: 'https://github.com/gjtorikian/html-proofer'}] 
license:            [{url: 'https://github.com/gjtorikian/html-proofer/blob/master/LICENSE.txt', label: 'MIT License'}] 
wiki:               [{url: 'https://github.com/gjtorikian/html-proofer/wiki'}] 

github:             [{name: 'gjtorikian/html-proofer'}] 
dockerhub:          [{name: 'phpqa/htmlproofer'}]

dependencies:       ['libcurl']
gem:                {name: 'html-proofer', command: 'htmlproofer'}      

---

[{{ page.title }}]({{ page.url | absolute_url }}) will test your rendered HTML files to make sure they're accurate.

<!--more--> 

It is a set of tests to validate your HTML output.
These tests check if your image references are legitimate, if they have alt tags, if your internal links are working, and so on.
It's intended to be an all-in-one checker for your output.
