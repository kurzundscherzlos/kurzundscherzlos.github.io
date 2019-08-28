---
#sidebar:
#  nav: "links"
---

**Ein kleines Schreibprojekt.** Kurzgeschichten aller Art und Poesie mit Reimen. Nicht immer mit Reimen. Nicht immer scherzlos. Aber immer kurz. Hoch-Niveau-Word-Art und Papperlapapp aus dem Südnorden. 

{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% if post.description %}
  <p>{{ post.description }}</p>
  {% endif %}
{% endfor %}
