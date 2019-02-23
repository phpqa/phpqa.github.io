---
layout:             'project'
title:              'Prettier PHP plugin'
order:              'prettier php plugin'
tags:               ['code formatter', 'alpha']
slug:               'prettier-php-plugin'

authors:            [{name: 'Mike Grip'}, {name: 'Evilebot Tnawi'}, {name: 'Christian Zosel'}]

website:            [{url: 'https://github.com/prettier/plugin-php'}] 
license:            [{url: 'https://github.com/prettier/plugin-php/blob/master/LICENSE', label: 'MIT License'}] 

github:             [{name: 'prettier/plugin-php'}] 

dependencies:       []
node:
    - suffix: 'as a dev dependency'
      packages: [{name: 'prettier', version: 'latest'}, {name: '@prettier/plugin-php', version: 'latest'}]
      commands: [{description: 'Run it', executable: 'prettier', arguments: 'path/to/file.php --write'}]
      yarn: true
      npm: true
      dev: true
    - suffix: 'as a global dependency'
      packages: [{name: 'prettier', version: 'latest'}, {name: '@prettier/plugin-php', version: 'latest'}]
      commands: [{description: 'Run it', executable: 'prettier', arguments: 'path/to/file.php --write'}]
      yarn: true
      npm: true
      global: true

---

[{{ page.title }}]({{ page.url | absolute_url }}) adds support for the PHP language to Prettier,
an opinionated code formatter.
 
<!--more--> 

[Prettier](https://prettier.io/) enforces a consistent style by parsing your code and re-printing it with its own rules
that take the maximum line length into account, wrapping code when necessary.

**Note**: this plugin can also be integrated with [php-cs-fixer]({{ site.projects | where: 'title', 'PHP Coding Standards Fixer 2' | map: 'url' | first | absolute_url }}).
See [`docs/recipes/php-cs-fixer`](https://github.com/prettier/plugin-php/tree/master/docs/recipes/php-cs-fixer) for integration help,
code can also be found in [https://gist.github.com/Billz95/9d5fad3af728b88540fa831b73261733]()
