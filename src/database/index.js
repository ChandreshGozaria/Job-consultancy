const mongoose = require("mongoose");
//configure mongoose

console.log('call --------------------- 002');
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Demo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);