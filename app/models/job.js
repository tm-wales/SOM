var mongoose = require("mongoose");

var JobSchema = mongoose.Schema({
    reference: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    numberNeeded: Number,
    filled: Number,
    description: String,
    date: Date,
    responsibilities: [String],
    requirements: [String],
    package: String,
    contact: {
        name: String,
        title: String,
        email: String
    },
    location: String,
});

module.exports = mongoose.model("Job", JobSchema);