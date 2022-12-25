const mongoose = require("mongoose");
const Schema = mongoose.Schema;


ObjectId = Schema.ObjectId;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    clientId: {
        type: ObjectId,
        required: true
    },
    recruiterId: {
        type: ObjectId,
        required: true
    },
    positions: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Posts", postSchema);