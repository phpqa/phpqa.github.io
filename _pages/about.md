---
layout: page
title: About
title-visible: false
comments: false
---

## Diligence

This website is heavily inspired by the work of Sebastian Bergmann
for "[The PHP Quality Assurance Toolchain](https://web.archive.org/web/20161107075017/http://phpqatools.org:80/)".

## Charity

A huge thanks to all the people who are maintaining one or more quality assurance projects for PHP:
<br/>{{ site.projects | map: 'authors' | map: 'name' | join: ',' | split:',' | where_exp: 'content', 'content != ""' | sort | uniq | join: ', ' }}

## Temperance

Even more tools can be found on the [exakat repository](https://github.com/exakat/php-static-analysis-tools).
