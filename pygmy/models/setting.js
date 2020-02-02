var mongoose = require("mongoose");

var SettingSchema = mongoose.Schema({
    underConstruction: Boolean,
    googleAnalyticsID: String,
});


module.exports = mongoose.model("Setting", SettingSchema);