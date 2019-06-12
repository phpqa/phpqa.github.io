---
layout:             'project'
title:              'You are using it wrong'
order:              'you are using it wrong'
tags:               ['type safety'] 

companies:          [{name: 'Roave'}]

website:            [{url: 'https://github.com/Roave/you-are-using-it-wrong'}]
license:            [{url: 'https://github.com/Roave/you-are-using-it-wrong/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'Roave/you-are-using-it-wrong'}]
packagist:          [{name: 'roave/you-are-using-it-wrong'}]               

dependencies:       ['composer']
composer:           {}

---

[{{ page.title }}]({{ page.url | absolute_url }}) enforces type checks during composer installation in downstream consumers of your package.

<!--more-->
 
This only applies to usages of classes, properties, methods and functions declared within packages that directly depend on roave/you-are-using-it-wrong.

Issues that the static analyser finds that do not relate to these namespaces will not be reported.

`roave/you-are-using-it-wrong` comes with a zero-configuration out-of-the-box setup.

By default, it hooks into `composer install` and `composer update`, preventing a successful command execution if there are type errors in usages of protected namespaces.

The usage of this plugin is highly endorsed for authors of new PHP libraries who appreciate the advantages of static types.

This project is built with the hope that libraries with larger user-bases will raise awareness of type safety (or current lack thereof) in the PHP ecosystem.
