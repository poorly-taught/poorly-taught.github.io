const pluginDate = require("eleventy-plugin-date");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginMermaid);

  return {
    dir: {
      input: "src", // default is "."
      output: "docs" // default is "_site"
    }
  }
};