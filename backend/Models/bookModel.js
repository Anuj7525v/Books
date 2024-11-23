const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 
    title:{
        type:String},
    author:String,
    description:String,
    coverImage:String,

});

module.exports = mongoose.model("Book",bookSchema);