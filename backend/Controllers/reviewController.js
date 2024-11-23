const Review = require("../Models/reviewModel");

const createReview = async (req, res) => {
    try {
        const { book, user, rating, comment } = req.body;
        if (!book || !user || !rating || !comment) {
            return res.status(400).send("fill the given details.");
        }
        const newReview = new Review({
            book, user, rating, comment
        });
        const saveReview = await newReview.save();
        res.status(201).json(saveReview);
    }
    catch (error) {
        console.log(error, "Failed to create the review");
    }
};

const getAllReview = async (req, res) => {
    try {
    const reviews = await Review.find().populate('book').populate('user');
    res.status(200).json(reviews);
     }


    catch (error) {
        res.status(400).json({ message: "Failed to fetch reviews.", error });

    }
};

module.exports = {getAllReview,createReview};