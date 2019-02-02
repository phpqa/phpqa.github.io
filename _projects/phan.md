---
layout:             'project'
title:              'Phan'
order:              'phan'
tags:               ['bugs finder', 'static analysis', 'cli']

authors:            [{name: 'Rasmus Lerdorf'}, {name: 'Andrew Morrison'}, {name: 'Tyson Andre'}]

website:            [{url: 'https://github.com/phan/phan'}]
license:            [{url: 'https://github.com/phan/phan/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'phan/phan'}]
packagist:          [{name: 'phan/phan'}]
dockerhub:          [{name: 'phpqa/phan'}]

dependencies:       ['pcntl', 'git', 'ext-ast']
brew:               {name: ['php71', 'php71-ast', 'phan']}
composer-dev:       {version: {'PHP 7.0': '0.8.x-dev', 'PHP 7.1+': '1.x'}, command: 'vendor/bin/phan'}
git:                {install-composer-dependencies: true, command: 'php phan'}
phar:               {url: {'X.X.X': 'https://github.com/phan/phan/releases/download/X.X.X/phan.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a static analyzer for PHP.

<!--more-->

Phan prefers to avoid false-positives and attempts to prove incorrectness rather than correctness.
