module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],
  safelist: [
    // Rouge token classes can occur in future posts, not just the current build.
    /^(?:c|ch|cm|cp|cpf|c1|cs|k|kc|kd|kn|kp|kr|kt|nt|ow|s|sa|sb|sc|dl|sd|s2|se|sh|si|sx|sr|s1|ss|m|mb|mf|mh|mi|il|mo|no|nf|fm|nc|nn|nb|bp|na|nv|vc|vg|vi|o|p|n|nd|err|gd|gt|gi)$/,
    "collapse",
    "collapsing",
    "show",
    "dropdown-menu",
    "dropdown-item",
    "table",
    "table-dark",
    "table-hover",
    "table-responsive",
    "af-tooltip",
    "af-popover",
    "font-weight-bold",
    "font-weight-medium",
    "font-weight-lighter",
    // medium-zoom injects these at runtime, so they never appear in the static
    // HTML PurgeCSS scans; without them the zoom overlay's z-index rule is purged
    // and page chrome (scroll-progress bar, ToC) bleeds through a zoomed image.
    "medium-zoom-overlay",
    "medium-zoom-image--opened",
  ],
};
