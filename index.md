---
#sidebar:
#  nav: "links"
---

**Ein kleines Schreibprojekt.** Prosa. Poesie. Papperlapapp. Hoch-Niveau-Word-Art aus dem Südnorden. 

{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% if post.description %}
  <p>{{ post.description }}</p>
  {% endif %}
{% endfor %}