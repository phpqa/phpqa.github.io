---
layout:             'project'
title:              'SensioLabs Security Checker'
order:              'sensiolabs security checker'
tags:               ['security', 'composer', 'vulnerabilities', 'checker', 'cli', 'online service', 'dependencies'] 

authors:            [{name: 'Fabien Potencier'}] 
companies:          [{name: 'SensioLabs'}] 

website:            [{url: 'https://security.symfony.com/'}]
license:            [{url: 'https://github.com/sensiolabs/security-checker/blob/master/LICENSE', label: 'MIT License'}]
demo:               [{url: 'https://security.symfony.com/'}]

github:             [{name: 'sensiolabs/security-checker'}]
packagist:          [{name: 'sensiolabs/security-checker'}]          
dockerhub:          [{name: 'phpqa/security-checker'}] 

dependencies:       []
phar:               {url: {'No HTTPS': 'http://get.sensiolabs.org/security-checker.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a command line tool that checks if your
application uses dependencies with known security vulnerabilities.
 
<!--more--> 

This tool is backed by the [Symfony Security Monitoring service]({{ page.website.url }})
and the [PHP Security Advisories Database]({{ site.projects | where: 'title', 'PHP Security Advisories Database' | map: 'url' | first | absolute_url }}).

## Usage

Checking your composer file can be done in several ways:

* Upload your `composer.lock` file on [{{ page.website.url }}]({{ page.website.url }});

* Use it as a CLI tool:

    ```php checker security:check /path/to/composer.lock```

* Use the web service with curl:

    ```curl -H "Accept: text/plain" https://security.symfony.com/check_lock -F lock=@/path/to/composer.lock```

   It will return all vulnerabilities detected in your dependencies in plain
   text. You can also retrieve the information in the JSON format:

    ```curl -H "Accept: application/json" https://security.symfony.com/check_lock -F lock=@/path/to/composer.lock```
