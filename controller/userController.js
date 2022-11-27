const express = require("express");
const app = express();

const userSchema = require("../model/userSchema");
exports.createUser = (req, res) => {
  const user = new userSchema(req.body);
  user.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in saving user",
      });
    } else {
      res.status(201).json({
        obj: data,
        message: "User data saved successfully",
      });
    }
  });
};
exports.getAllUser = (req,res)=>{
  userSchema.find((err,data)=>{
    if(err){
      res.status(500).json({
        message:"Error in fetching data"
      })

    }else
    {
     res.status(200).json({
      data:data,
      message: "User data fetch successfully"
     })
    }
  })
}