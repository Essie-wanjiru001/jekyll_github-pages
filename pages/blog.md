---
layout: page
title: Tech Blog
permalink: /blog/
---

# Latest Insights & Thoughts

Welcome to my tech blog, where I share insights, tutorials, and reflections on software development, technology trends, and my professional journey.

## Recent Posts
{% for post in site.posts limit:5 %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt }}</p>
    <small>Posted on {{ post.date | date: "%B %d, %Y" }}</small>
  </article>
{% endfor %}

[View All Posts](/archive)