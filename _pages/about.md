---
layout: about
title: about
permalink: /
subtitle: Personal website and blog.

profile:
  align: left
  image: me.png
  image_circular: true # crops the image to make it circular
  more_info:

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: false # keep the latest posts in the normal page flow
  limit: 3 # leave blank to include all the blog posts
---

<style>
  /* Homepage presentation, inspired by Lil'Log's quiet editorial style. */
  .post {
    --global-theme-color: #345f78;
    --global-hover-color: #23495f;
  }
  html[data-theme="dark"] .post {
    --global-theme-color: #a5c8d9;
    --global-hover-color: #c6e1ed;
  }
  .post .post-header { margin-bottom: 2rem; }
  .post .post-header .post-title { letter-spacing: -0.035em; }
  .post article .profile.float-left {
    width: 26%;
    max-width: 220px;
    margin: 0 2rem 1.5rem 0;
  }
  .post article .clearfix { line-height: 1.75; }
  .post article > h2 {
    clear: both;
    padding-top: 1.5rem;
    border-top: 1px solid var(--global-divider-color);
    font-size: 1.4rem;
    font-weight: 600;
  }
  @media (max-width: 575px) {
    .post article .profile.float-left {
      width: 48%;
      max-width: 180px;
      margin: 0 0 1.5rem;
    }
  }
  @layer utilities {
    @media (max-width: 575px) {
      .post article .profile.float-left { float: none !important; }
    }
  }
</style>

Hi, I'm Michael Zaitsev. Welcome to my personal website.

This is where I write. Head over to the [blog]({{ '/blog/' | relative_url }}) to see my latest
posts, or check out my [CV]({{ '/cv/' | relative_url }}).

More about me coming soon.
