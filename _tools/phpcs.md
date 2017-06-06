---
layout:         tool
title:          PHP_CodeSniffer
authors:        [Greg Sherwood]
license:        {url: 'https://github.com/squizlabs/PHP_CodeSniffer/blob/master/licence.txt', label: 'BSD 3-clause "New" or "Revised" License'}
website:        {url: 'https://pear.php.net/package/PHP_CodeSniffer'}
github:         {name: squizlabs/PHP_CodeSniffer}
packagist:      {name: squizlabs/php_codesniffer}               
docker:         {name: phpqa/phpcs}     
command:        phpcs  
tags:           [coding standards, cli] 
comments:       true
---

[{{ page.title }}]({{ site.url }}{{ page.url }}) tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards.

<!--more-->

PHP_CodeSniffer is a set of two PHP scripts; the main phpcs script that tokenizes PHP, JavaScript and CSS files
to detect violations of a defined coding standard, and a second phpcbf script to automatically correct coding standard violations.
PHP_CodeSniffer is an essential development tool that ensures your code remains clean and consistent.
