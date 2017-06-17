---
layout:         tool
title:          Composer
website:        {url: 'https://getcomposer.org/'} 
authors:        [Nils Adermann, Jordi Boggiano]
license:        {url: 'https://github.com/composer/composer/blob/master/LICENSE', label: 'MIT License'} 
docs:           {url: 'https://getcomposer.org/doc/'} 
github:         {name: 'composer/composer'} 
command:        composer
phar:           {url: 'https://getcomposer.org/composer.phar'}
dependencies:   []
tags:           [cli, dependency management]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a tool for dependency management in PHP.

It allows you to declare the libraries your project depends on and it will manage (install/update) them for you. 

<!--more--> 

## Installation

- on [Linux / Unix / OSX](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
- on [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows)

## Tools you can install with {{ page.title }}

{% assign composer_tools = site.tools | where_exp: 'packagist', 'packagist.name != ""' %}
{% for tool in composer_tools %}[{{ tool.title }}]({{ tool.url | absolute_url }}){% if false == forloop.last %}, {% endif %}{% endfor %}
