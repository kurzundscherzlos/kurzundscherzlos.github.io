---
sidebar:
  nav: "links"
---

**Ein kleines Schreibprojekt.** Kurzgeschichten aller Art und Poesie mit Reimen. Nicht immer mit Reimen. Und nicht immer scherzlos; **manchmal aber schon.**

{% for post in site.posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>{{ post.description }}</p>
{% endfor %}