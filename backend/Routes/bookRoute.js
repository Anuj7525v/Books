const express = require("express");
const router = express.Router();
const {getAllBooks,getBook,addBook}  = require("../Controllers/bookController");

router.post('/create',addBook); // admin only
router.get("/all",getAllBooks);
router.get("/all/:id",getBook);



module.exports = router;


