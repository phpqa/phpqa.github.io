---
layout:             'project'
title:              'PHPCheckstyle'
order:              'phpcheckstyle'
tags:               ['coding standards', 'cli'] 

authors:            [{name: 'Hari Kodungallur'}, {name: 'Nimish Pachapurkar'}, {name: 'Benoit Pesty'}, {name: 'James Brooks'}, {name: 'Marcin Kurczewski'}] 

website:            [{url: 'https://github.com/PHPCheckstyle/phpcheckstyle'}]
license:            [{url: 'https://github.com/PHPCheckstyle/phpcheckstyle/blob/master/LICENSE.txt', label: 'Open Software License version 2.1'}]
wiki:               [{url: 'https://github.com/PHPCheckstyle/phpcheckstyle/wiki'}]

github:             [{name: 'PHPCheckstyle/phpcheckstyle'}]
packagist:          [{name: 'phpcheckstyle/phpcheckstyle'}]               
dockerhub:          [{name: 'phpqa/phpcheckstyle'}]     

dependencies:       []
composer-dev:       {version: 'dev-master', command: 'phpcheckstyle'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is an open-source tool that helps PHP programmers adhere to certain coding conventions.
 
<!--more-->

It checks the input PHP source code and reports any deviations from the coding convention.

The tool uses the PEAR Coding Standards as the default coding convention. 
But it allows you to configure it to suit your coding standards.

Please visit [https://github.com/PHPCheckstyle/phpcheckstyle/wiki](https://github.com/PHPCheckstyle/phpcheckstyle/wiki) for
more information and documentation.
