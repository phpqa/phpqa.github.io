---
layout:             'project'
title:              'Safe-PHP'
order:              'safe php'
tags:               ['core php', 'replacement', 'alpha'] 

authors:            [{name: 'David Négrier'}]
companies:          [{name: 'TheCodingMachine'}]

website:            [{url: 'https://github.com/thecodingmachine/safe'}]
license:            [{url: 'https://github.com/thecodingmachine/safe/blob/master/LICENSE', label: 'MIT License'}]
docs:               [{url: 'https://thecodingmachine.io/introducing-safe-php'}]

github:             [{name: 'thecodingmachine/safe'}]
packagist:          [{name: 'thecodingmachine/safe'}]               

dependencies:       []
composer:           {}

---

[{{ page.title }}]({{ page.url | absolute_url }}) redeclares all core PHP functions. The new PHP functions act exactly as the old ones, except they throw exceptions properly when an error is encountered.

<!--more-->

The "safe" functions have the same name as the core PHP functions, except they are in the Safe namespace.

**Note**: {{ page.title }} can be integrated with both 
<a href="{{ site.projects | where: 'title', 'PHPStan - PHP Static Analysis Tool' | map: 'url' | first | absolute_url }}">PHPStan</a>
and <a href="{{ site.projects | where: 'title', 'Rector' | map: 'url' | first | absolute_url }}">Rector</a>.
Check out [the documentation](https://github.com/thecodingmachine/safe) for more information.
