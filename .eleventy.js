module.exports = function(eleventyConfig) {
  // Tell Eleventy to copy images/static files from src/assets to _site/assets
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    htmlTemplateEngine: "njk"
  };
};

