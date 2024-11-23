const express = require("express");
const router = express.Router();
const {createReview,getAllReview} = require("../Controllers/reviewController");



router.post("/create-review",createReview);
router.get("/all-review",getAllReview)


module.exports = router;