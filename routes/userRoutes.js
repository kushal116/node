const express = require("express");
const app = express();
const router= express.Router()
const userController= require('../controller/userController')

router.post('/user',userController.createUser)
router.get('/user',userController.getAllUser)
module.exports = router;