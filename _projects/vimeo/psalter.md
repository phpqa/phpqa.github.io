---
layout:             'project'
title:              'Psalter'
order:              'psalter'
tags:               ['code fixer', 'static analysis', 'type safety', 'cli'] 

authors:            [{name: 'Matthew Brown'}]
companies:          [{name: 'Vimeo'}]   

website:            [{url: 'https://getpsalm.org/'}]
license:            [{url: 'https://github.com/vimeo/psalm/blob/master/LICENSE', label: 'MIT License'}]
wiki:               [{url: 'https://github.com/vimeo/psalm/wiki'}]

github:             [{name: 'vimeo/psalm'}]
packagist:          [{name: 'vimeo/psalm'}]          

dependencies:       []
composer-dev:       {command: 'vendor/bin/psalter'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) will automatically fix some of the many errors
that <a href="{{ site.projects | where: 'title', 'Psalm' | map: 'url' | first | absolute_url }}">Psalm</a> can find.

<!--more--> 
