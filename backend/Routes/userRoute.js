const express = require("express");
const router = express.Router();
const {register,login,getUserProfile,updateUserProfile} = require("../Controllers/userController");



router.post("/register",register);
router.post("/login",login);
router.get("/user/:id",getUserProfile);
router.put("/user/:id",updateUserProfile);


module.exports = router;