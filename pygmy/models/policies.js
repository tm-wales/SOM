var mongoose = require("mongoose");

var PolicySchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    route: { type: String, unique: true, required: true },
    title: String,
    html: String,
    active: Boolean
});


module.exports = mongoose.model("Policy", PolicySchema);