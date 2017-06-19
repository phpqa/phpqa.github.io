---
layout:             'project'
title:              'SensioLabs Security Checker'
authors:            ['Fabien Potencier'] 
companies:          ['SensioLabs'] 
tags:               ['security', 'composer', 'vulnerabilities checker', 'cli', 'online service'] 

website:            {url: 'https://security.sensiolabs.org/'}
license:            {url: 'https://github.com/sensiolabs/security-checker/blob/master/LICENSE', label: 'MIT License'}
demo:               {url: 'https://security.sensiolabs.org/check'}

github:             {name: 'sensiolabs/security-checker'}
packagist:          {name: 'sensiolabs/security-checker'}          
dockerhub:          [{name: 'phpqa/security-checker'}] 

dependencies:       []
phar:               {url: {'No HTTPS': 'http://get.sensiolabs.org/security-checker.phar'}}

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a command line tool that checks if your
application uses dependencies with known security vulnerabilities.
 
<!--more--> 

This tool is backed by the [PHP Security Advisories Database]({{ site.projects | where: 'title', 'PHP Security Advisories Database' | map: 'url' | first | absolute_url }}).

## Usage

This tool can be used in several ways:

* Upload your `composer.lock` file on [{{ page.website.url }}]({{ page.website.url }});

* Use it as a CLI tool:

    ```php security-checker security:check /path/to/composer.lock```

* Use the web service directly:

    ```curl -H "Accept: text/plain" https://security.sensiolabs.org/check_lock -F lock=@/path/to/composer.lock```

   It will return all vulnerabilities detected in your dependencies in plain
   text. You can also retrieve the information in the JSON format:

    ```curl -H "Accept: application/json" https://security.sensiolabs.org/check_lock -F lock=@/path/to/composer.lock```
