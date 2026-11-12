---
layout: default
title: tags
permalink: /tags/
nav: true
nav_order: 3
---

<style>
  .tag-browser {
    max-width: 720px;
    margin: 0 auto;
  }

  .tag-browser h1 {
    font-size: clamp(1.9rem, 4vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .tag-browser p {
    color: var(--global-text-color-light);
  }

  .tag-browser input {
    width: 100%;
    max-width: 28rem;
    padding: 0.65rem 0.8rem;
    color: var(--global-text-color);
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    font: inherit;
  }

  .tag-browser input:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 2px;
  }

  .tag-browser ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }

  .tag-browser li a {
    display: block;
    padding: 0.55rem 0.8rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    text-decoration: none;
  }

  .tag-browser li a:hover,
  .tag-browser li a:focus-visible {
    border-color: var(--global-theme-color);
    text-decoration: underline;
  }
</style>

<section class="tag-browser">
  <h1>Blog tags</h1>
  <p>Find a topic and see the posts filed under it.</p>
  <label for="tag-filter">Filter tags</label>
  <input id="tag-filter" type="search" placeholder="Type a tag" autocomplete="off">
  <ul id="tag-list">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      <li data-tag="{{ tag[0] | escape }}">
        <a href="{{ tag[0] | slugify | prepend: '/blog/tag/' | relative_url }}">
          #{{ tag[0] | escape }} <span>({{ tag[1].size }})</span>
        </a>
      </li>
    {% endfor %}
  </ul>
  <p id="tag-empty" hidden>No tags found.</p>
</section>

<script>
  (() => {
    const input = document.getElementById("tag-filter");
    const items = Array.from(document.querySelectorAll("#tag-list [data-tag]"));
    const empty = document.getElementById("tag-empty");
    input.addEventListener("input", () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      items.forEach((item) => {
        const matches = item.dataset.tag.toLocaleLowerCase().includes(query);
        item.hidden = !matches;
        if (matches) visible += 1;
      });
      empty.hidden = visible !== 0;
    });
  })();
</script>
