---
layout:         tool
title:          phpDox
authors:        [Arne Blankerts]
website:        {url: 'http://phpdox.de/'}
license:        {url: 'https://github.com/theseer/phpdox/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
github:         {name: theseer/phpdox}
packagist:      {name: theseer/phpdox}               
dockerhub:      [{name: phpqa/phpdox}]     
command:        phpdox
git:            {composer-install: true, command: 'php phpdox'}
phar:           {url: {'X.X.X': 'https://github.com/theseer/phpdox/releases/download/X.X.X/phpdox-X.X.X.phar'}}
dependencies:   [ext-xsl]  
tags:           [documentation, cli] 
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a documentation generator for PHP projects.
 
<!--more--> 

This includes, but is not limited to, API documentation.
