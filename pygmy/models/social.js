var mongoose = require("mongoose");

var SocialSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    link: String,
    icon: String,
});


module.exports = mongoose.model("Social", SocialSchema);