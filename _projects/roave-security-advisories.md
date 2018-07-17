---
layout:             'project'
title:              'Roave Security Advisories'
tags:               ['security', 'composer', 'vulnerabilities', 'checker']

authors:            [{name: 'Marco Pivetta'}]
companies:          [{name: 'Roave'}]

website:            [{url: 'https://github.com/Roave/SecurityAdvisories'}]
license:            [{url: 'https://github.com/Roave/SecurityAdvisories/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'Roave/SecurityAdvisories'}]
packagist:          [{name: 'roave/security-advisories'}] 

dependencies:       []
composer:           {name: 'roave/security-advisories', version: 'dev-master'}   

---

[{{ page.title }}]({{ page.url | absolute_url }}) ensures that your application
doesn't have installed dependencies with known security vulnerabilities.

<!--more--> 

This tool is backed by the [PHP Security Advisories Database]({{ site.projects | where: 'title', 'PHP Security Advisories Database' | map: 'url' | first | absolute_url }}).

## Usage

This package does not provide any API or usable classes;
its only purpose is to prevent installation of software with known and documented security issues.
Simply require it to your `composer.json` `"require"` section
and you will not be able to harm yourself with software with known security vulnerabilities.

For example, try the following:

```
composer require {{ page.composer.name }}:{{ page.composer.version }}
# following commands will fail:
composer require symfony/symfony:2.5.2
composer require zendframework/zendframework:2.3.1 
```

The checks are only executed when adding a new dependency via `composer require` or when running `composer update`:
deploying an application with a valid `composer.lock` and via `composer install` won't trigger any security versions
checking.

## Stability

This package can only be required in its `{{ page.composer.version }}` version.
There will never be stable/tagged versions because of the nature of the problem being targeted.
Security issues are in fact a moving target, and locking your project
to a specific tagged version of the package would not make any sense.

This package is therefore only suited for installation in the root of your deployable project.
