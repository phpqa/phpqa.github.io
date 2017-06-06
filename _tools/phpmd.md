---
layout:         tool
title:          PHP Mess Detector
authors:        [Manuel Pichler]
license:        {url: 'https://github.com/phpmd/phpmd/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
website:        {url: 'https://phpmd.org/'}
github:         {name: phpmd/phpmd}
packagist:      {name: phpmd/phpmd}               
docker:         {name: phpqa/phpmd}     
command:        phpmd 
tags:           [bugs finder, mess detector, metrics, cli] 
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) scans PHP source code and looks for potential problems such as possible bugs,
dead code, suboptimal code, and overcomplicated expressions.
 
<!--more--> 
 
PHPMD is a spin-off project of PHP Depend and aims to be a PHP equivalent of the well known Java tool PMD.
It can be seen as an user friendly frontend application for the raw metrics stream measured by PHP Depend.
