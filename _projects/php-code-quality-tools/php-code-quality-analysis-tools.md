---
layout:             'project'
title:              'PHP code quality and static analysis tools'
order:              'oneforall'
tags:               ['metrics', 'cli','coding standards','php compatibility', 'bugs finder', 'static analysis', 'type safety']

authors:            [{name: 'Madhav Vyas'}]

website:            [{url: 'https://'}]
license:            [{url: 'https://github.com/madhavvyas/php-code-quality-analysis-tools/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'madhavvyas/php-code-quality-analysis-tools'}]
dockerhub:          [{name: 'madhavvyas/php-code-quality-analysis-tools'}]

dependencies:       []
composer:           {command: ''}
composer-dev:       {command: ''}
composer-global:    {command: ''}
gem:                {name: '', command: ''}
git:                {update-submodules: false, install-composer-dependencies: false, command: ''}
phar:               {url: ''}

---

[{{ page.title }}]({{ page.url | absolute_url }}) ...

<!--more-->
The objective is to include multiple PHP code quality and static code analysis tools in an easy to use Docker image. The tools include PHP static analysis, lines of PHP code report, mess detector, code smell highlighting, copy/paste detection, and the compatibility of the application from one version of PHP to another for modernization.
