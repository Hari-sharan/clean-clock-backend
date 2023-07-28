const express = require("express");
const router = express.Router();
const userController= require("../controller/user.controller");
const verifyToken = require('../middlewares/auth')

router.post('/send-otp', userController.sendOtp);
router.post('/verify-otp', userController.initiateUser);
router.put('/update-profile', verifyToken, userController.updateUser);

module.exports=router;