const mongoose = require("mongoose");
const Schema = mongoose.Schema;


ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
    postId: {
        type: ObjectId,
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
    notes: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Notes", noteSchema);