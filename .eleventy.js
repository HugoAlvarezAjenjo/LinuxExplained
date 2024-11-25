module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("basePath", process.env.NODE_ENV === 'production' ? "/Prueba" : "");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/js");

  eleventyConfig.addFilter("safe", function (value) {
    return value;
  });

  return {
    dir: {
      input: "src",      // Carpeta de entrada
      output: "_site",    // Carpeta de salida
    },
    htmlTemplateEngine: "liquid", // Motor de plantillas (puedes cambiarlo si prefieres otro)
    markdownTemplateEngine: "liquid",
  };
};
