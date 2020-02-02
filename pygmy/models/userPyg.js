var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserPygSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String },
    tm: Boolean
});

UserPygSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("UserPyg", UserPygSchema);