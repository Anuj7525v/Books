const Book = require("../Models/bookModel");

const addBook = async (req, res) => {

    const { title, author, description, coverImage } = req.body;
    if (!title || !author || !description || !coverImage) {
        return res.status(400).send("fill all the details.");
    }
    try {
        const newBook = new Book({
            title,
            author,
            description,
            coverImage
        });
        await newBook.save();
        res.status(200).send("Book Create successfully");
    }
    catch (error) {
        console.error(error);
    }
};


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    }
    catch (error) {
        console.error(error);
    }
};

const getBook = async (req,res) => {

    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            return res.status(400).json({
                message:"Book not found"
            });
        }
        res.json(book);
    }
    catch(error){
        console.error(error);
    }
};

module.exports = {getBook,getAllBooks,addBook};