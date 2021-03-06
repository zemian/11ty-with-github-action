let dateFilter = require('nunjucks-date-filter');

module.exports = function(eleventyConfig) {

    // Copy all static files into output dir
    eleventyConfig.addPassthroughCopy({"static/": "./"});
    eleventyConfig.addPassthroughCopy({"node_modules/bulma/css/bulma.*": "./css"});

    // Ignore project files
    eleventyConfig.ignores.add("readme.md");

    // The Nunjucks does not have "date" filter!
    eleventyConfig.addNunjucksFilter("date", dateFilter);
    eleventyConfig.addNunjucksFilter("keys", obj => Object.keys(obj));

    return {
        dir: {
            input: "src",
            output: "_site",
        },
        templateFormats: ["html", "md", "njk", "11ty.js"],
        dataTemplateEngine: false,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
    }
};