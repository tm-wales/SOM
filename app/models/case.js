var mongoose = require("mongoose");

var CaseSchema = mongoose.Schema({
    name: { type: String, unique: true, required: true },
    featured: Boolean,
    client: String,
    category: {
        type: String,
        enum: ['Residential', 'Commercial', 'Education','Extra Care']
    },
    imagePaths: {
        primary: String,
        other: [String]
    },
    text: {
        summary: String,
        other: [String]
    },
    keyFacts: [{
        main: String,
        sub: String
    }],
    testimonials: [{
        person: {
            name: String,
            position: String,
            company: String,
            image: String
        },
        testimonial: String,
        date: Date
    }],
    awards: [{
        name: String,
        image: String
    }],
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Case", CaseSchema);