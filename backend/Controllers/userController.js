const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findOne } = require("../Models/bookModel");


const register = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).send("Please fill all the details");
        }
        const isUserExist = await findOne({email});
        if(isUserExist){
            return res.status(400).send("User already Exist");
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,
            email,
            password:hashedPassword,
        });
        await newUser.save();
        res.status(200).send("Register Successfully");
    }
    catch(error){
        console.error("Register Failed..",error);
    }
};

const login = async (req,res) => {
    try {
        const {email,password} = req.body;
        console.log(email,password,req.body);
        if(!email || !password){
            return res.status(200).send("Fill all the details.");
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send("Invalid Email or Password");
        }
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).send("Invalid Email or Password");
        }
        const token = jwt.sign({userId:user._id},"secret",{
            expiresIn: "1h",
        });
        res.status(200).json({
            token,
            userId:user._id,
            name:user.name,
            email:user.email,
        });
    } catch (error) {
        console.error("Failed to login",error);
        
    }
};

const getUserProfile = async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).send("User not found.");
        }
        res.status(200).json(user);

        
    } catch (error) {
        res.status(500).json({message:"Failed to get user profile",error});    
    }
};

const updateUserProfile = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {name,email,password},
            {new:true,runValidators:true}
        );
        if(!updateUser){
            return res.status(400).send("User not found.");
        }
        res.status(200).json(updateUser);

    }
    catch(error){
        console.log(error);
    }
};

module.exports = {updateUserProfile,register,login,getUserProfile};