const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const bodyParser = require("body-parser");
const cors = require('cors');

const bookRoute = require("./Routes/bookRoute");
const reviewRoute = require("./Routes/reviewRoute");
const userRoute = require("./Routes/userRoute");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(cors({
    origin:'*'
}));

app.use("/api/books",bookRoute);
app.use("/api/reviews",reviewRoute);
app.use("/api/users",userRoute);

app.get("/", (req,res) => {
    res.status(200).send("Book_Server..");
});


app.listen(port,() => {
    mongoose.connect("mongodb+srv://Book:Book008@cluster0.vqlwp77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
        });
   
});