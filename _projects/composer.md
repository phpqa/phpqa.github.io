---
layout:             'project'
title:              'Composer'
tags:               ['cli', 'dependency management']

authors:            [{name: 'Nils Adermann'}, {name: 'Jordi Boggiano'}] 

website:            [{url: 'https://getcomposer.org/'}] 
license:            [{url: 'https://github.com/composer/composer/blob/master/LICENSE', label: 'MIT License'}] 
docs:               [{url: 'https://getcomposer.org/doc/'}] 

github:             [{name: 'composer/composer'}] 
packagist:          [{name: 'composer/composer'}]
 
dependencies:       []
phar:               {url: 'https://getcomposer.org/composer.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a tool for dependency management in PHP.

It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. 

<!--more--> 

## Packages you can install with {{ page.title }}

{% assign packages = site.projects | where_exp: 'item', 'item.packagist.name != nil' %}
{% for package in packages %}[{{ package.title }}]({{ package.url | absolute_url }}){% if false == forloop.last %}, {% endif %}{% endfor %}

## Verified installation

For a verified installation, please check the official {{ page.title }} documentation.

- [Download {{ page.title }} with PHP and the official installer](https://getcomposer.org/download/) 
- [Install {{ page.title }} on Linux / Unix / OSX](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
- [Install {{ page.title }} on Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)
- [Install {{ page.title }} programmatically](https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md)
