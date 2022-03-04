---
---
// we can use the variable "properties" in our other JS files to get access to this list
// on a production website, these would be pulled from a database rather than a file like this

const properties = [
    {% for p in site.properties %}
    {
        "title": "{{ p.title }}",
        "type": "{{ p.type }}",
        "is_for": "{{ p.is_For }}",
        "rights": "{{ p.rights }}",
        "price": {{ p.price }},
        "beds": {{ p.beds }},
        "baths": {{ p.baths }},
        "images": [
            {% for i in p.images %}
            "{{ i }}"{% if forloop.last != true %},{% endif %}
            {% endfor %}
        ],
        "url": "property2.html",
        "weight": Math.random()
    }{% if forloop.last != true %},{% endif %}
    {% endfor %}
];
