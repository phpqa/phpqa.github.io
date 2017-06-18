---
layout:             'project'
title:              'PHPCompatibility'
authors:            ['Wim Godden'] 
tags:               ['coding standards', 'php compatibility', 'cli']

website:            {url: 'https://github.com/wimg/PHPCompatibility'}
license:            {url: 'https://github.com/wimg/PHPCompatibility/blob/master/LICENSE', label: 'GNU Lesser General Public License v3.0 (LGPL)'}

github:             {name: 'wimg/PHPCompatibility'}
packagist:          {name: 'wimg/php-compatibility'}               
dockerhub:          [{name: 'phpqa/php-compatibility'}]     

dependencies:       []
composer-dev:       {version: 'dev-feature/fix-102-107-directory-layout', further-instructions: {'Inform PHPCS about the new standard': 'php vendor/bin/phpcs --config-set installed_paths vendor/wimg/php-compatibility'}, command: 'vendor/bin/phpcs --standard=PHPCompatibility'} 

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a set of sniffs for PHP_CodeSniffer that checks for PHP version compatibility.

<!--more--> 

It will allow you to analyse your code for compatibility with higher and lower versions of PHP.
