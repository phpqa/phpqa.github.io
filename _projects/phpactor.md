---
layout:             'project'
title:              'Phpactor'
tags:               ['completion', 'refactoring']

authors:            [{name: 'Daniel Leech'}]   

website:            [{url: 'https://phpactor.github.io/phpactor/'}]
license:            [{url: 'https://github.com/phpactor/phpactor/blob/develop/LICENSE', label: 'MIT License'}]
docs:               [{url: 'https://phpactor.github.io/phpactor/'}]

github:             [{name: 'phpactor/phpactor'}]
packagist:          [{name: 'phpactor/phpactor'}]               
dockerhub:          [{name: 'phpqa/phpa'}]     

dependencies:       []
git:                {update-submodules: false, install-composer-dependencies: true, command: 'phpactor'}  

twitter:            [{name: 'phpactor'}]

---

[{{ page.title }}]({{ page.url | absolute_url }}) is an intelligent code-completion and refactoring tool for PHP.

<!--more--> 

- Code Completion: Provides broad and accurate context aware code completion.
- No indexing: Phpactor works in real-time and is optimied with composer. It is fast.
- Introspection: Jump to class and method definitions, find references.
- Refactoring: Move classes, complete constructors, implement contracts, generate methods, etc.
- Native VIM plugin: Lightweight VIM plugin.
- CLI interface: Most/some functionality is exposed through CLI commands.

Phpactor can be used in a limited way as a standalone application, but its full power can only be utilized through its RPC protocol. It ships with support for VIM and there is also a plugin for Emacs.

Phpactor is pronounced "factor", as in "factorisation" and "re-factoring". It is a large project and some parts are more fully realised than others but it is used as an essential tool in day-to-day PHP work.
