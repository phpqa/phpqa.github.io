---
layout: page
title: Contributing
title-visible: false
comments: false
---

## Content

* [Run the website locally](#run-the-website-locally)
* [Add a project](#add-a-project)
* [Send a Pull Request](#send-a-pull-request)

## Run the website locally
   
- Install docker-compose through [Docker CE](https://www.docker.com/community-edition)
- Run the Jekyll container by running the terminal command `docker-compose up`
- Open the webpage at `http://0.0.0.0:4000` or `http://127.0.0.1:4000`
- Keep track of Jekyll errors by running the terminal command `docker-compose logs -f` 

## Add a project

If you want to add your own project, the easiest way is probably
to copy the [`_draft.md`](https://raw.githubusercontent.com/phpqa/phpqa.github.io/master/_tools/_draft.md) page
from the `_tools` directory.

Most of the *.md files are named according to their short name or their command, but the choice might be yours.

Any file in that directory consists of two parts:
- the [Jekyll Front Matter](#jekyll-front-matter)
- the [description](#description)

### Jekyll Front Matter

This is basically valid YAML in between triple-dashed lines.

#### Basic project information

##### Layout

layout: `string` 'tool'

Jekyll's layout field. This is a **required** field, and should **always** be 'tool'.

##### Title

title: `string` *title*

The official name of the tool. This is a **required** field, and will mostly be the main title of the GitHub's README.

This field should also be used to start the description of the tool (see [`description`](#description)).

##### Authors

authors: `string[]` *authors* = nil

The authors of the project. This is an **optional** field, but is strongly **encouraged** for any tool that has a publicly available repository.

##### Companies

companies: `string[]` *companies* = nil

The companies behind the project. This is an **optional** field, but is strongly **encouraged** for any tool that has a company backing it.
    
##### Tags

tags: `string[]` *tags*

A list of tags describing this project. This is a **required** field, as the tags are being used on the overview page.
They provide easy filtering for anyone looking for a tool for a certain use case.
Try to be as specific as possible, while also keeping the amount of new tags down.
    
#### Online resources

##### Website

website: `object` {url: `string` *url*, label: `string` *label* = nil}

The website for the project. This is a **required** field, and should be an object with at least a `url` property.

- url: *required*
    - The `url`<sup>[1](#notes)</sup> for this website.
- label: *optional*, *discouraged*
    - The label for this website.
    - This field will be used to overwrite the visible url on the tool detail page.

##### License

license: `object` {url: `string` *url*, label: `string` *label*}

The license for the project. This is a **required** for licensed projects.
It should be an object with at least a `url` and a `label` property.

- url: *required*
    - The `url`<sup>[1](#notes)</sup> where this license can be read in full.
- label: *required* 
    - The type of this license. Examples are 'MIT License'. <!-- TODO list all examples --> 
    - This field will be used to overwrite the visible url on the tool detail page.

##### Terms

terms: `object` {url: `string` *url*, label: `string` *label*}

The terms for the project. This is a **required** field for online services.
It should be an object with at least a `url` and a `label` property.
        
- url: *required*
    - The `url`<sup>[1](#notes)</sup> where the terms can be read in full.
- label: *required* 
    - The exact name for these terms. Examples are 'Terms of Service', 'Terms'. <!-- TODO list all examples -->
    - This field will be used to overwrite the visible url on the tool detail page.

##### Wiki, Docs and/or Demo

wiki: `object` {url: `string` *url*, label: `string` *label* = nil}

docs: `object` {url: `string` *url*, label: `string` *label* = nil}

demo: `object` {url: `string` *url*, label: `string` *label* = nil}

Extra fields for the project. These are all **optional** fields,
but it is highly **encouraged** to provide them if possible.
They should all be an object with at least a `url`.
 
- url: *required*
    - The `url`<sup>[1](#notes)</sup> where this wiki / documentation / demo can be found.
- label: *optional*, *discouraged*
    - The label for this wiki / documentation / demo.
    - This field will be used to overwrite the visible url on the tool detail page.
     
#### Discoverability      

##### GitHub

{% assign github-repository-icon = '<svg aria-hidden="true" class="octicon octicon-repo github-repository-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>' %}

github: `object` {name: `string` *name*, url: `string` *url* = nil}

The [GitHub](https://github.com/) repository behind this project.
This field is **required** for projects with a [GitHub](https://github.com/) repository,
and should be an object with at least a `name`.

- name: *required*
    - The `name` of the GitHub project.
        This consists of the GitHub organisation name, a forward slash and the GitHub repository name.
        The easiest way is probably to check the {{ github-repository-icon }} title on the main page of your GitHub project.
- url: *optional*, *discouraged*
    - The `url`<sup>[1](#notes)</sup> where the GitHub repository can be found.
    - If this property is not provided, the `url` will be generated as a concatenation
            of '{{ site.metadata.github.url-prefix }}' and the `name`.

##### Packagist

packagist: `object` {name: `string` *name*, url: `string` *url* = nil}

The [Packagist](https://packagist.org/) package behind this project.
This field is **required** for projects available as a [Packagist](https://packagist.org/) package,
and should be an object with at least a `name`.

- name: *required*
    - The `name` of the Packagist project.
        This consists of the Packagist organisation name, a forward slash and the Packagist package name.
        The easiest way is probably to check the title on the main page of your Packagist project.
- url: *optional*, *discouraged*
    - The `url`<sup>[1](#notes)</sup> where the Packagist package can be found.
    - If this property is not provided, the `url` will be generated as a concatenation
            of '{{ site.metadata.packagist.url-prefix }}' and the `name`.

##### DockerHub

dockerhub: `array` [`object` {name: `string` *name*, url: `string` *url* = nil}]

A list of Docker images available on [DockerHub](https://hub.docker.com/) for this project.
This field is **required** for projects that have a [DockerHub](https://hub.docker.com/) image available.
Each entry should be an object with at least a `name`.
        
- name: *required*
    - The `name` of the DockerHub image.
        This consists of the DockerHub organisation name, a forward slash and the DockerHub image name.
        The easiest way is probably to check the title on the main page of your DockerHub page.
- url: *optional*, *discouraged*
    - The `url`<sup>[1](#notes)</sup> where the DockerHub image can be found.
    - If this property is not provided, the `url` will be generated as a concatenation
            of '{{ site.metadata.dockerhub.url-prefix }}' and the `name`.

#### Installation

##### Dependencies

dependencies: `string[]` *dependencies* = []

A list of dependencies the project relies on, other than PHP itself.
Some projects require php extensions enabled, or special libraries added before installing the tool.
This field is **optional**.

##### Composer

composer: `object` {name: `string` *name* = nil, version: `mixed` *version* = nil, command: `mixed` *command* = nil}

composer-dev: `object` {name: `string` *name* = nil, version: `mixed` *version* = nil, command: `mixed` *command* = nil}

composer-global: `object` {name: `string` *name* = nil, version: `mixed` *version* = nil, command: `mixed` *command* = nil}

The [Composer](https://getcomposer.org/) package behind this project.
These fields are **required** for any project that can be installed with [Composer](https://getcomposer.org/). 
They should all be an object with most of the times at least a `command` property.
        
- name: *optional*
    - The `name` of the Composer package. It will be used as the package name to install.
    - If this property is not provided, it will default to the [Packagist](#packagist) `name`.
- version: *optional*
    - The `version` that is needed to install this package.
    - This field is a mixed field, it can be
        either `string` *version*, `string[]` [`string` *version*] or `object` {`string` *type*: `string` *version*}.
        - The `string` or `string[]` version is useful for specifying that for example `dev-master` should be required.
        - The `object` version helps with targeting specific environments: `{'PHP 5.6': '0.5.6', 'PHP 7+': '1.0.0'}`.
- further-instructions: *optional*
    - [Further instructions](#-further-instructions) can be provided.
- command: *optional*
    - The `command` that will be available to run the tool after installation.
    - This field is a mixed field, it can be
        either `string` *command*, `string[]` [`string` *command*] or `object` {`string` *type*: `string` *command*}.
        - The `string` or `string[]` option is useful for specifying how to run the tool after the installation.
        - The `object` option helps with mentioning specific actions: `{'initiate': 'command', 'run': 'command'}`.

##### Gem

gem: `object` {name: `string` *name*, command: `mixed` *command* = nil}

The [Gem](https://rubygems.org/) behind this project.
This field is **optional**, but highly **encouraged** for any project that can be installed
with [RubyGems](https://rubygems.org/) or [Bundler](https://bundler.io/).  
It should be an object with at least a `name` property.
        
- name: *required*
    - The `name` of the Gem. It will be used as the name to install.
- further-instructions: *optional*
    - [Further instructions](#-further-instructions) can be provided.
- command: *optional*, *encouraged*
    - The `command` that will be available to run the tool after installation.
    - This field is a mixed field, it can be
        either `string` *command*, `string[]` [`string` *command*] or `object` {`string` *type*: `string` *command*}.
        - The `string` or `string[]` option is useful for specifying how to run the tool after the installation.
        - The `object` option helps with mentioning specific actions: `{'initiate': 'command', 'run': 'command'}`.

##### Git

git: `object` {url: `string` *url* = nil, update-submodules: `boolean` *update-submodules* = false, install-composer-dependencies: `boolean` *install-composer-dependencies* = false, command: `mixed` *command* = nil}

The Git repository behind this project.
This field is **optional**, but highly **encouraged** for any project that can be installed
from a [Git](https://git-scm.com/) repository.
It should be an object with at best at least a `command` property.

- url: *optional*, *discouraged*
    - The `url`<sup>[1](#notes)</sup> of the Git repository. It will be used as the url to clone.
    - If this property is not provided, it will default to a modified version of the [GitHub](#github) `url`.
- update-submodules: *optional*
    - If the repository needs to initiate any Git submodules, set this to true.
- install-composer-dependencies: *optional*
    - If the repository needs to install some [Composer](https://getcomposer.org/) dependencies, set this to true.
- further-instructions: *optional*
    - [Further instructions](#-further-instructions) can be provided.
- command: *optional*, *encouraged*
    - The `command` that will be available to run the tool after installation.
    - This field is a mixed field, it can be
        either `string` *command*, `string[]` [`string` *command*] or `object` {`string` *type*: `string` *command*}.
        - The `string` or `string[]` option is useful for specifying how to run the tool after the installation.
        - The `object` option helps with mentioning specific actions: `{'initiate': 'command', 'run': 'command'}`.

##### PHAR

phar: `object` {url: `mixed` *url*}

The PHAR location for this project.
This field is **optional**, but highly **encouraged** for any project that can be installed
as a [PHP Archive](https://phar.io).
It should be an object with a `url` property.
        
- url: *required*
    - The `url`<sup>[1](#notes)</sup> of the PHAR location. It will be used as the url to download with either wget or curl.
    - This field is a mixed field, it can be
        either `string` *url*, `string[]` [`string` *url*] or `object` {`string` *type*: `string` *url*}.
        - The `string` or `string[]` option can provide one or more PHAR locations.
        - The `object` option helps with targeting specific environments: `{'PHP 7': 'https://url.to/tool'}`.
            It can also be used to provide more context: `{'No HTTPS': 'http://url.to/tool'}`.
- further-instructions: *optional*
    - [Further instructions](#-further-instructions) can be provided.

##### * Further instructions   

further-instructions: `object` {`string` *instruction*: `string` *command*}

Further instructions to be executed after installation. This field is available as an **optional** field for
most of the installation options [`composer`](#composer), [`gem`](#gem), [`git`](#git) and [`phar`](#phar).
Simply add the option to the object to provide further instructions.
 
- further-instructions: *optional*
    - A list with steps to run directly after installation, to prepare the tool to be used.
- description: *optional*
    - The instruction of the step, like "Add the file to your directory".
    - The command for this step, like "mv file directory/file".
-->

### Description

```
{% raw %}[{{ page.title }}]({{ page.url | absolute_url }}){% endraw %} is a website that lists many useful PHP QA projects.

{{ site.excerpt_separator }}

It enlists many well-known as well as lesser known PHP Quality Assurance projects for everyday use.
```

The description is the part below the Jekyll Front Matter.
It consists of two parts, separated by the Jekyll excerpt_separator `{{ site.excerpt_separator }}`.

The first part of the description should try to describe the tool in one short sentence.
This will be the sentence that will be visible on the overview page.
Try to use the name of the tool somewhere in the beginning,
and do it by using this code {% raw %}`[{{ page.title }}]({{ page.url | absolute_url }})`{% endraw %}.

Then add the Jekyll excerpt_separator `{{ site.excerpt_separator }}`,
and go wild with the longer description that will be completely visible on the tool page.
 
## Send a Pull Request

Fork the [phpqa.github.io repository](https://github.com/phpqa/phpqa.github.io),
add your file to the `_tools` directory, and send us a [Pull Request](https://github.com/phpqa/phpqa.github.io/pulls).

## Notes

1: YAML requires single quotes around all urls, as the colon in the url will throw it off.
