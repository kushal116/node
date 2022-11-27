const express = require("express");
const app = express();
const router= express.Router()
const studentController= require('../controller/studentContorller')

router.post('/student',studentController.createStudent)
router.get('/student',studentController.getAllstudent)
module.exports = router;