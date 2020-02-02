var mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    iconPath: String,
    mainImagePath: String,
    order: Number,
    content: {
        summary: String,
        main: String
    },
    subProducts: [
        {
            name: { type: String, unique: true, required: true },
            iconPath: String,
            mainImagePath: String,
            order: Number,
            content: {
                summary: String,
                main: String,
                keyFacts: [String],
            },
        }
    ]
});

module.exports = mongoose.model("Product", ProductSchema);