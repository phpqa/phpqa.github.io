---
layout:             'project'
title:              'CaptainHook'
order:              'captainhook'
tags:               ['git hooks', 'commit']

authors:            [{name: 'Sebastian Feldmann'}]

website:            [{url: 'https://github.com/captainhookphp/captainhook'}] 
license:            [{url: 'https://github.com/CaptainHookPhp/captainhook/blob/master/LICENSE', label: 'MIT License'}]
docs:               [{url: 'https://captainhookphp.github.io/captainhook/'}] 

github:             [{name: 'captainhookphp/captainhook'}] 
packagist:          [{name: 'captainhook/captainhook'}]

dependencies:       ['git']
composer-dev:       {command: 'vendor/bin/captainhook', further-instructions: {'Create a configuration': 'vendor/bin/captainhook configure', 'Activate the hooks': 'vendor/bin/captainhook install'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is an easy to use and very flexible git hook library for php developers.
It enables you to configure your git hook actions in a simple json file.
 
<!--more-->

You can use CaptainHook to validate or prepare your commit messages,
ensure code quality or run unit tests before you commit or push changes to git.
You can automatically clear local caches or install the latest composer dependencies after pulling the latest changes.

CaptainHook makes it easy to share hooks within your team and even can make sure that everybody in your team
activates the hooks locally.

You can run cli commands, use some built in validators,
or write your own PHP classes that get executed by CaptainHook. 
