---
layout:         tool
title:          PHPSpec
website:        {url: 'https://www.phpspec.net/'} 
authors:        [Konstantin Kudryashov, Marcello Duarte, Ciaran McNulty]
license:        {url: 'https://github.com/phpspec/phpspec/blob/master/LICENSE', label: 'MIT'} 
docs:           {url: 'https://www.phpspec.net/en/latest/manual/introduction.html'} 
github:         {name: 'phpspec/phpspec'} 
packagist:      {name: 'phpspec/phpspec'}
command:        phpspec
dependencies:   [prophecy]
tags:           [testing, specification]
---

Spec BDD with phpspec. phpspec is a tool which can help you write clean and working PHP code using behaviour
driven development or BDD. BDD is a technique derived from test-first development. 

[{{ page.title }}]({{ site.url }}{{ page.url }}) ...

<!--more--> 

BDD is a technique used at story level and spec level. phpspec is a tool for use at the spec level or 
SpecBDD. The technique is to first use a tool like phpspec to describe the behaviour of an object you 
are about to write. Next you write just enough code to meet that specification and finally you refactor 
this code.
