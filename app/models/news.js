var mongoose = require("mongoose");

var NewsSchema = mongoose.Schema({
    name: String,
    category: {
        type: String,
        enum: ['News', 'Twitter', 'Facebook']
    },
    mainImage: {
        path: String,
        caption: String
    },
    content: String,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: {
        type: Date,
        default: Date.now()
    },
    comments: [{
        body: String,
        commentor: String,
        date: {
            type: Date,
            default: Date.now()
        }
    }]
});

module.exports = mongoose.model("News", NewsSchema);