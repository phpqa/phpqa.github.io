---
layout:         tool
title:          PHP Mess Detector
authors:        [Manuel Pichler]
website:        {url: 'https://phpmd.org/'}
license:        {url: 'https://github.com/phpmd/phpmd/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
github:         {name: phpmd/phpmd}
packagist:      {name: phpmd/phpmd}               
dockerhub:      [{name: phpqa/phpmd}]     
composer-dev:   {command: 'vendor/bin/phpmd'}
git:            {submodule-install: true, composer-install: true, command: 'src/bin/phpmd'}
phar:           {url: 'https://static.phpmd.org/php/latest/phpmd.phar'}
dependencies:   []
tags:           [bugs finder, mess detector, metrics, cli] 
---

[{{ page.title }}]({{ page.url | absolute_url }}) scans PHP source code and looks for potential problems such as possible bugs,
dead code, suboptimal code, and overcomplicated expressions.
 
<!--more--> 
 
PHPMD is a spin-off project of PHP Depend and aims to be a PHP equivalent of the well known Java tool PMD.
It can be seen as an user friendly frontend application for the raw metrics stream measured by PHP Depend.
