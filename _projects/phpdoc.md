---
layout:             'project'
title:              'phpDocumentor'
tags:               ['cli', 'documentation']

authors:            [{name: 'Mike van Riel'}]

website:            [{url: 'https://phpdoc.org/'}] 
license:            [{url: 'https://github.com/phpDocumentor/phpDocumentor2/blob/develop/LICENSE', label: 'MIT License'}] 
demo:               [{url: 'http://demo.phpdoc.org/'}] 
docs:               [{url: 'https://docs.phpdoc.org/'}] 

github:             [{name: 'phpDocumentor/phpDocumentor2'}] 
packagist:          [{name: 'phpdocumentor/phpdocumentor'}]
dockerhub:          [{name: 'phpdoc/phpdoc'}, {name: 'phpqa/phpdoc'}]

dependencies:       ['ext/intl', 'ext/zip', 'ext/xsl', 'graphviz']
composer-dev:       {command: 'vendor/bin/phpdoc'}
composer-global:    {command: 'phpdoc'}
phar:               {url: 'https://github.com/phpDocumentor/phpDocumentor2/releases/download/RELEASE/phpDocumentor.phar'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) analyzes your code to create great documentation.
It enables you to generate documentation directly from your PHP source code.

<!--more--> 

This documentation provides an in-depth view of your project to you, your consumers and contributors.

