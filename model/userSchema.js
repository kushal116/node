const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = schema({
  name: {
    type:String,
  },
  email: {
    type:String,
  },
  password: {
    type:String,
  },
  Age: {
    type:Number,
  },
  isMarried: {
    type:Boolean,
  },
});
module.exports =mongoose.model("User3",userSchema);