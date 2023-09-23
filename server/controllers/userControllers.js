const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/User')

//@desc Register a user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400).json({error: 'All fields are mandatory'});
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400).json({error: 'User already registered'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if(user) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user._id
                }
            },
            process.env.ACCESS_TOKEN_SECRET
        );
        res.cookie("token", accessToken, {httpOnly: true});
        res.status(201).json({_id: user.id, email: user.email});
    } else {
        res.status(400).json({error: 'User data is not valid'});
    }
    res.json({message: "Register the user"});
});

//@desc Login a user
//@route POST /api/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400).json({error: 'All fields are mandatory'});
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user._id
                }
            },
            process.env.ACCESS_TOKEN_SECRET
            // { expiresIn: "1h" }
        );
        res.cookie("token", accessToken, {httpOnly: true});
        res.status(200).json({message: "successfully logged in"})
    } else {
        res.status(401).json({error: 'email or password is not valid'});
    }
    res.json({message: "Login the user"});
});

//@desc Current User Info
//@route POST /api/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(res.locals.user);
});

//@desc Logout a User
//@route POST /api/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    res.clearCookie("token");
    res.status(400).json({message: 'successfully logged out'});
});

module.exports = { registerUser, loginUser, currentUser, logoutUser };