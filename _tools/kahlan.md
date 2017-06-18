---
layout:         tool
title:          Kahlan
website:        {url: 'https://kahlan.github.io/docs/'} 
authors:        [CrysaLEAD]
license:        {url: 'https://github.com/kahlan/kahlan/blob/master/LICENSE.txt', label: 'MIT'} 
docs:           {url: 'https://kahlan.github.io/docs/'} 
github:         {name: 'kahlan/kahlan'} 
packagist:      {name: 'kahlan/kahlan'}
dockerhub:      [{name: 'kahlan/kahlan'}]
composer-dev:   {command: 'vendor/bin/kahlan'}
git:                {install-composer-dependencies: true, command: 'bin/kahlan'}
dependencies:   []
tags:           [testing, bdd]
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) is a full-featured Unit & BDD test framework a la RSpec/JSpec 
which uses a `describe-it` syntax and moves testing in PHP one step forward.

<!--more--> 

Kahlan allows to stub or monkey patch your code directly like in Ruby or JavaScript without any required PECL-extentions.
