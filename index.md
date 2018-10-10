---
#sidebar:
#  nav: "links"
---

**Ein kleines Schreibprojekt.** Kurzgeschichten aller Art und Poesie mit Reimen. Nicht immer mit Reimen. Und nicht immer scherzlos; **manchmal aber schon.**

{% for post in site.posts %}
  <h3 style="margin:0;"><a href="{{ post.url }}">{{ post.title }}</a></h3>
  {% if post.description %}
  <p>{{ post.description }}</p>
  {% endif %}
{% endfor %}