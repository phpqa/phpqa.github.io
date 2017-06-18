---
layout:             tool
title:              Codeception
authors:            [Michael Bodnarchuk]
website:            {url: 'http://codeception.com/'}
license:            {url: 'https://github.com/Codeception/Codeception/blob/2.3/LICENSE', label: 'MIT License'}
github:             {name: codeception/codeception}
packagist:          {name: codeception/codeception}               
dockerhub:          [{name: phpqa/codeception}]
composer-dev:       {command: 'vendor/bin/codecept'}
phar:               {url: {'No HTTPS': 'http://codeception.com/codecept.phar'}}
dependencies:       []
tags:               [testing, cli]
---

[{{ page.title }}]({{ page.url | absolute_url }}) is a modern full-stack testing framework for PHP.

<!--more--> 

Inspired by [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development),
it provides an absolutely new way of writing acceptance, functional and even unit tests.
Powered by PHPUnit.
