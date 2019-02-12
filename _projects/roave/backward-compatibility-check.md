---
layout:             'project'
title:              'Backward Compatibility Check'
order:              'backward compatibility check'
tags:               ['backward compatibility', 'cli'] 

companies:          [{name: 'Roave'}]

website:            [{url: 'https://github.com/Roave/BackwardCompatibilityCheck'}]
license:            [{url: 'https://github.com/Roave/BackwardCompatibilityCheck/blob/master/LICENSE', label: 'MIT License'}]

github:             [{name: 'Roave/BackwardCompatibilityCheck'}]
packagist:          [{name: 'roave/backward-compatibility-check'}]               
dockerhub:          [{name: 'nyholm/roave-bc-check'}]     

dependencies:       ['git', 'composer']
composer-dev:       {command: 'vendor/bin/roave-backward-compatibility-check'}

---

[{{ page.title }}]({{ page.url | absolute_url }}) can be used to verify BC breaks between two versions of a PHP library.
