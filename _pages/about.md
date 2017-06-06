---
layout: page
title: About
title-visible: false
---

## Diligence

This website is heavily inspired by the work of Sebastian Bergmann
for ["The PHP Quality Assurance Toolchain"](http://phpqatools.org/).

## Charity

A huge thanks to all the people who are maintaining one or more quality assurance tools for PHP:
<br/>{{ site.tools | map: 'authors' | join: ',' | split:',' | sort | uniq | join: ', ' }}

## Temperance

Even more tools can be found on the [exakat repository](https://github.com/exakat/php-static-analysis-tools).
