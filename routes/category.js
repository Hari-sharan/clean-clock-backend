const express = require("express");
const router = express.Router();
const categoryController= require("../controller/category");
const verifyToken = require('../middlewares/adminAuth')

router.post('/add-category',verifyToken, categoryController.addCategory);
router.get('/get-category',verifyToken ,categoryController.getCategories);
router.delete('/delete-category', verifyToken, categoryController.deleteCategory);

module.exports=router;