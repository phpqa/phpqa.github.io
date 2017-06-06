---
layout:         tool
title:          PhpCodeFixer  
authors:        [Sergei Vanyushin]
license:        {url: 'https://github.com/wapmorgan/PhpCodeFixer/blob/master/LICENSE', label: 'BSD 3-clause "New" or "Revised" License'}
website:        {url: 'https://github.com/wapmorgan/PhpCodeFixer'}
github:         {name: wapmorgan/PhpCodeFixer}
packagist:      {name: wapmorgan/php-code-fixer}               
docker:         {name: phpqa/phpcf}     
command:        phpcf 
tags:           [bugs finder, deprecated functions, php compatibility, cli] 
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) finds deprecated functions, wrong functions usage, variables, ini directives and restricted identifiers in your php code.
 
<!--more--> 

It literally helps you fix code that can fail after migration to PHP 7.
