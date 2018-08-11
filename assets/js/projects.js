---
layout: empty
---

var projects = [{% for project in site.projects %}{% raw %}{{% endraw %}{% for key in site.project_keys %}{% if project[key] %}"{{ key }}": {{ project[key] | default: nil | jsonify }}{% if false == forloop.last %},{% endif %}{% endif %}{% endfor %}{% raw %}}{% endraw %}{% if false == forloop.last %},{% endif %}{% endfor %}];
