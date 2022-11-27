const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studentSchema = schema({
  name: {
    type:String,
  },
  Number: {
    type:Number,
  },
  email: {
    type:String,
  }, Age: {
    type:Number,
  },
  password: {
    type:String,
  }
 

});
module.exports =mongoose.model("Student",studentSchema);