# mzaitsev

Personal website and blog of **Michael Zaitsev** — [insdout.github.io/mzaitsev](https://insdout.github.io/mzaitsev/).

The homepage pairs a profile with recent posts and takes visual inspiration from
[Lilian Weng’s Lil’Log](https://lilianweng.github.io/). The site uses al-folio,
with MathJax for mathematical notation and Rouge for code highlighting.

## Development

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve            # http://localhost:4000/mzaitsev/
bundle exec jekyll build            # production build to _site/
```

ImageMagick generates responsive images. Install Python and `nbconvert` when
building posts that include Jupyter notebooks. Node.js is needed for the
repository's JavaScript checks and the CSS purge step used by deployment.

## Deployment

Pushing to `main` triggers the **Deploy site** GitHub Action, which builds the
site and publishes it to the `gh-pages` branch (served by GitHub Pages).

## Structure

- `_pages/` — Home, CV, Blog
- `_posts/` — blog posts
- `_config.yml` — site configuration
- `assets/img/me.png` — profile picture

---

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT).
