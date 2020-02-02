var mongoose = require("mongoose");

var PagesSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    templatePath: String,
    routePath: String,
    title: String,
    description: String,
    keywords: String,
    content: {}
});

module.exports = mongoose.model("Page", PagesSchema);