---
layout:             'project'
title:              'Phing'
order:              'phing'
tags:               ['build tool','automation','build system','cli']

authors:            [{name: 'Michiel Rook'},{name: 'Siad Ardroumli'}]

website:            [{url: 'https://www.phing.info/'}] 
license:            [{url: 'https://raw.githubusercontent.com/phingofficial/phing/master/LICENSE', label: 'LGPL'}] 
docs:               [{url: 'https://www.phing.info/guide/chunkhtml/'}] 

github:             [{name: 'phingofficial/phing'}] 
packagist:          [{name: 'phing/phing'}]
dockerhub:          [{name: 'phing/phing'}]

composer-dev:       {command: 'vendor/bin/phing'}
composer-global:    {command: 'phing'}
phar:               {file: 'phing', url: 'https://www.phing.info/get/phing-latest.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) PHP project build system

<!--more-->

You can do anything with it that you could do with a traditional build system like GNU make, and its use of simple XML build files and extensible PHP "task" classes make it an easy-to-use and highly flexible build framework.

Features include running PHPUnit unit tests (including test result and coverage reports), file transformations (e.g. token replacement, XSLT transformation, template transformations), file system operations, interactive build support, SQL execution, Git, Mercurial and Subversion operations, tools for creating PEAR packages, documentation generation (PhpDocumentor, ApiGen) and much, much more.

If you find yourself writing custom scripts to handle the packaging, deploying, or testing of your applications, then we suggest looking at Phing. Pre-packaged with numerous out-of-the-box operation modules (tasks), and an easy-to-use OO model to extend or add your own custom tasks.
