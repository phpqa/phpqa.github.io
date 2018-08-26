---
layout:             'project'
title:              'Tuli'
order:              'tuli'
tags:               ['deprecated', 'bugs finder', 'static analysis', 'cli'] 

authors:            [{name: 'Anthony Ferrara'}]

website:            [{url: 'https://github.com/ircmaxell/Tuli/'}]
license:            [{url: 'https://github.com/ircmaxell/Tuli/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'ircmaxell/Tuli'}]
packagist:          [{name: 'ircmaxell/tuli'}]          
dockerhub:          [{name: 'phpqa/tuli'}]     

dependencies:       ['git'] 
composer-dev:       {version: 'dev-master', command: 'tuli'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static analysis engine.

<!--more--> 
