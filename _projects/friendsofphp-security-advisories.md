---
layout:             'project'
title:              'PHP Security Advisories Database'
order:              'php security advisories database'
tags:               ['security', 'vulnerabilities', 'database'] 

authors:            [{name: 'FriendsOfPHP'}] 

website:            [{url: 'https://security.sensiolabs.org/database'}]
license:            [{url: 'https://github.com/FriendsOfPHP/security-advisories/blob/master/LICENSE', label: 'The Unlicense'}]

github:             [{name: 'FriendsOfPHP/security-advisories'}]
packagist:          [{name: 'sensiolabs/security-advisories'}]

---                                          

The [{{ page.title }}]({{ page.url | absolute_url }}) references known security vulnerabilities in various PHP projects and libraries.
 
<!--more--> 

This database must not serve as the primary source of information for security issues,
it is not authoritative for any referenced software,
but it allows to centralize information for convenience and easy consumption.

## Browsing the database

You can browse the database entries on [{{ page.website.url }}]({{ page.website.url }}).

## Checking your application

This database is being used by the following tools:

- [SensioLabs Security Checker]({{ site.projects | where: 'title', 'SensioLabs Security Checker' | map: 'url' | first }})

- [Roave Security Advisories]({{ site.projects | where: 'title', 'Roave Security Advisories' | map: 'url' | first }})
