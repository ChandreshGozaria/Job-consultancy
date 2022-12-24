const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const adminSchema = new Schema({
  name: String,
  gmail: String,
  mobile: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Admin", adminSchema);