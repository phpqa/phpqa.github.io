---
layout:             'project'
title:              'Psalm'
tags:               ['bugs finder', 'static analysis', 'cli'] 

authors:            [{name: 'Matthew Brown'}]
companies:          [{name: 'Vimeo'}]   

website:            [{url: 'https://getpsalm.org/'}]
license:            [{url: 'https://github.com/vimeo/psalm/blob/master/LICENSE', label: 'MIT License'}]
wiki:               [{url: 'https://github.com/vimeo/psalm/wiki'}]

github:             [{name: 'vimeo/psalm'}]
packagist:          [{name: 'vimeo/psalm'}]          
dockerhub:          [{name: 'phpqa/psalm'}]     

dependencies:       []
composer-dev:       {command: 'vendor/bin/psalm'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static analysis tool for finding errors in PHP applications.

<!--more--> 
