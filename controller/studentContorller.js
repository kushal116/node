const express = require("express");
const app = express();

const studentSchema = require("../model/student");
exports.createStudent = (req, res) => {
  const student = new studentSchema(req.body);
  student.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in saving student",
      });
    } else {
      res.status(201).json({
        obj: data,
        message: "student data saved successfully",
      });
    }
  });
};
exports.getAllstudent = (req,res)=>{
  studentSchema.find((err,data)=>{
    if(err){
      res.status(500).json({
        message:"Error in fetching data"
      })

    }else
    {
     res.status(200).json({
      data:data,
      message: "student data fetch successfully"
     })
    }
  })
}