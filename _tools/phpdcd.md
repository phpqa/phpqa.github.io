---
layout:             tool
title:              PHP Dead Code Detector    
authors:            [Sebastian Bergmann]
website:            {url: 'https://github.com/sebastianbergmann/phpdcd'}
license:            {url: 'https://github.com/sebastianbergmann/phpdcd/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
github:             {name: sebastianbergmann/phpdcd}
packagist:          {name: sebastian/phpdcd}               
dockerhub:          [{name: phpqa/phpdcd}]     
composer-dev:       {command: 'vendor/bin/phpdcd'}
composer-global:    {command: 'phpdcd'}
phar:               {url: 'https://phar.phpunit.de/phpdcd.phar'}
dependencies:       []
tags:               [unmaintained, dead code detection, cli] 
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a Dead Code Detector (DCD) for PHP code.
 
<!--more--> 

It scans a PHP project for all declared functions and methods and reports those as being "dead code" that are not called at least once.

**This project is no longer maintained and its repository is only kept for archival purposes.**
