---
layout: page
title: Contributing
title-visible: false
comments: false
---

## Content

* [Run the website locally](#run-the-website-locally)
* [Add a tool](#add-a-tool)
* [Send a Pull Request](#send-a-pull-request)

## Run the website locally
   
- Install docker-compose through [Docker CE](https://www.docker.com/community-edition)
- Run the Jekyll container by running the terminal command `docker-compose up`
- Open the webpage at `http://0.0.0.0:4000` or `http://127.0.0.1:4000`
- Keep track of Jekyll errors by running the terminal command `docker-compose logs -f` 

## Add a tool

If you want to add your own tool, the easiest way is probably
to copy the [`_draft.md` page from the `_tools` directory](),
and name it accordingly to `your_tool_name.md`.

An md file consists of the following main parts:
- a Jekyll Front Matter, which is basically valid YAML in between triple-dashed lines
- a description
- a Jekyll excerpt_separator
- a longer description 

### Name of the *.md file

`string`

This might become tricky over time, as we will add more and more tools.
The file name itself actually does not matter at all for jekyll, it will only show up in the url of the tool's page.
Most of the tools are named according to the actual command and phpqa/* docker image, but the choice is mostly yours.

### Layout

`layout:         tool` (`string`)

This is Jekyll's layout field, and should always be `tool`. Avoid surrounding it with quotes.

### Title

`title:          ` (`string`)

The title is the name of the tool, and is required for any added tool.
Most of the time, this is the title on the tool's README page of GitHub.
This field should also be used to start the description of the tool (see `description`).
Avoid surrounding it with quotes.

### Website

`website:        {url: 'https://'}` (`object` with two properties: a required `url` and a discouraged `label`)

This field is required for any tool. It should be an object with at least a `url` property.

- The property `url` is required, and will be used on both the overview as well as the tool page.
YAML requires single quotes around it, as the colon in the url will throw it off. 
- The property `label` is discouraged, and might be used to overwrite showing the url itself on the tool page.
Avoid surrounding it with quotes.

### Authors

`authors:        []` (`string[]`)

This field is optional, but is strongly suggested for any tool that has a publicly available repository.
These are the authors of the project. Quotes are not necessary, simply separate the names with a comma.

### Companies

`companies:      []` (`string[]`)

This field is optional, and can be used for any tool that has a company backing it.
These are the names of the companies behind the project. Quotes are not necessary, simply separate the names with a comma.

### License

`license:        {url: 'https://', label: ''}` (`object` with two properties, both required: `url` and `label`)

This field is required for any licensed tool. It should be an object with two properties.

- The property `url` is required, and will be used on the tool page.
YAML requires single quotes around it, as the colon in the url will throw it off. 
- The property `label` is required, and will be used to show the type of license on the tool page.
Avoid surrounding it with quotes.

### Terms

`website:        {url: 'https://', label: ''}` (`object` with two properties, both required: `url` and `label`)

This field is required for any online service. It should be an object with two properties.

- The property `url` is required, and will be used on the tool page.
YAML requires single quotes around it, as the colon in the url will throw it off. 
- The property `label` is required, and will be used to show the type of license on the tool page.
Avoid surrounding it with quotes.

### Wiki, Docs and/or Demo

`wiki:           {url: 'https://'}` (`object` with two properties: a required `url` and a discouraged `label`)
`docs:           {url: 'https://'}` (`object` with two properties: a required `url` and a discouraged `label`)
`demo:           {url: 'https://'}` (`object` with two properties: a required `url` and a discouraged `label`)
 
These fields are all optional, but always interesting to add.
If provided, they should be objects with at least a `url` property.

- The property `url` is required, and will be used on both the overview as well as the tool page.
YAML requires single quotes around it, as the colon in the url will throw it off. 
- The property `label` is discouraged, and might be used to overwrite showing the url itself on the tool page.
Avoid surrounding it with quotes.

### GitHub

`github:         {name: ''}` (`object` with two properties: a required `name` and a discouraged `url`)

This field is required for any tool with a GitHub repository. It should be an object with at least a `name` property.

- The property `name` is required, and will be used on the tool page. Avoid surrounding it with quotes. 
- The property `url` is only ever needed if the tool repository url does not consists of a concatenation of
'https://github.com/' and the name as mentioned before.
If this property is not provided, the url will be generated this way by Jekyll.
If provided, YAML requires single quotes around it, as the colon in the url will throw it off.
The (auto-generated or provided) url will be used on both the overview as well as the tool page.

### Packagist

`packagist:      {name: ''}` (`object` with two properties: a required `name` and a discouraged `url`)

This field is required for any tool added to Packagist. It should be an object with at least a `name` property.

- The property `name` is required, and will be used on the tool page. Avoid surrounding it with quotes. 
- The property `url` is only ever needed if the tool repository url does not consists of a concatenation of
'https://packagist.org/packages/' and the name as mentioned before.
If this property is not provided, the url will be generated this way by Jekyll.
If provided, YAML requires single quotes around it, as the colon in the url will throw it off.
The (auto-generated or provided) url will be used on both the overview as well as the tool page.

### DockerHub

`dockerhub:      {name: ''}` (`object` with two properties: a required `name` and a discouraged `url`)

This field is required for any tool that can be easily used with Docker. It should be an object with at least a `name` property.

- The property `name` is required, and will be used on the tool page. Avoid surrounding it with quotes. 
- The property `url` is only ever needed if the tool repository url does not consists of a concatenation of
'https://hub.docker.com/r/' and the name as mentioned before.
If this property is not provided, the url will be generated this way by Jekyll.
If provided, YAML requires single quotes around it, as the colon in the url will throw it off.
The (auto-generated or provided) url will be used on both the overview as well as the tool page.
 
### Command

`command:        ` (`string`)

The command is the command to be used with this tool, and most likely also the command to be used with the container.
Avoid surrounding it with quotes.

### Dependencies

`dependencies:   []` (`string[]`)

These describe the dependencies needed to be able to use this tool on your computer, other than PHP itself.
Some tools require php extensions enabled, or special libraries added before installing the tool.
Quotes are not necessary, simply separate the dependencies with a comma.

### Tags

`tags:           []` (`string[]`)

These are the tags as shown on the overview page.
They provide easy filtering for anyone looking for a tool for a certain use case.
Try to be as specific as possible, and keep the amount down.
Quotes are not necessary, simply separate the tags with a comma.

### Description

```
{% raw %}[{{ page.title }}]({{ page.url | absolute_url }}){% endraw %} is a website that lists many useful PHP QA tools.

<!--more-->

It enlists many well-known as well as lesser known PHP Quality Assurance tools for everyday use.
```

The description is the part below the Jekyll Front Matter.
 
Try to describe the tool in one short sentence. This will be the sentence that will be visible on the overview page.
Try to use the name of the tool somewhere in the beginning, and do it by using this code {% raw %}`[{{ page.title }}]({{ page.url | absolute_url }})`{% endraw %}.
Then add the Jekyll excerpt_separator `<!--more-->`, and go wild with the longer description for the tool page.
 

## Send a Pull Request

Fork the [phpqa.github.io repository](https://github.com/phpqa/phpqa.github.io),
add your file to the `_tools` directory, and send us a [Pull Request](https://github.com/phpqa/phpqa.github.io/pulls).
