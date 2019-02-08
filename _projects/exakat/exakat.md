---
layout:             'project'
title:              'Exakat'
order:              'exakat'
tags:               ['code analysis']

authors:            [{name: 'Damien Seguy'}]
companies:          [{name: 'Exakat Ltd'}]

website:            [{url: 'https://www.exakat.io/'}] 
license:            [{url: 'https://github.com/exakat/exakat/blob/master/LICENCE.txt', label: 'GNU Affero General Public License'}] 
docs:               [{url: 'https://exakat.readthedocs.io/en/latest/index.html'}] 

github:             [{name: 'exakat/exakat'}] 
dockerhub:          [{name: 'exakat/exakat'}]

dependencies:       ['Gremlin server', 'Java 8.x']

---

[{{ page.title }}]({{ page.url | absolute_url }}) is a tool for analyzing, reporting and assessing PHP code source 
efficiently and systematically. Exakat can process PHP 5.2 to 7.3 code, as well as reporting
on security, performance, code quality, migration.

<!--more--> 

Exakat reads the code, builds an AST and several dependency graphs, then indexes everything in a graph database.
Then, it runs analysis, collecting potential errors and descriptive informations about the code.
Finally, exakat produces reports, both for human, machines or other services to read.
