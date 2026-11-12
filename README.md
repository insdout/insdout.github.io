# Michael Zaitsev's website

Personal website and blog of **Michael Zaitsev**, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme. It uses MathJax for mathematical notation and Rouge for code highlighting. The homepage takes visual inspiration from [Lilian Weng’s Lil’Log](https://lilianweng.github.io/).

## Development

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve  # http://localhost:4000/
```

The local path reflects the `baseurl` currently set in `_config.yml`. Use `bundle exec jekyll build` to build the site into `_site/`.

ImageMagick generates responsive images. Python and `nbconvert` are needed for posts with Jupyter notebooks. Node.js is needed for JavaScript checks and the CSS purge step used in deployment.

## Deployment

The **Deploy site** GitHub Action builds qualifying changes pushed to `main` and publishes the output to the `gh-pages` branch, which GitHub Pages serves. Changes only to this README do not trigger the deployment workflow; it can also be run manually from the Actions tab.

The site is published at [insdout.github.io](https://insdout.github.io/). The repository is named `insdout.github.io`, and `baseurl` is empty in `_config.yml` for the root URL.

## Structure

- `_pages/` — homepage, CV, and other pages
- `_posts/` — blog posts
- `_config.yml` — site configuration
- `assets/img/me.png` — profile picture

Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT).
