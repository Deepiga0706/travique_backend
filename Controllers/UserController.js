const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            phone,
            password,
            confirmpassword
        } = req.body;

        if(password !== confirmpassword){
            return res.status(400).json({
                message:"Passwords do not match"
            });
        }
        const existingUser = await User.findOne({ email });

if(existingUser){
    return res.status(400).json({
        message:"User already exists"
    });
}
const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstname,
            lastname,
            email,
            phone,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message:"User registered successfully",
           
        });

    } catch(error) {
        res.status(500).json({
            message:"Error occurred while registering user",
            error:error.message
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }
        const token = jwt.sign(
    {
        id: existingUser._id,
        email: existingUser.email,
        role: existingUser.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: existingUser._id,
                firstname: existingUser.firstname,
                lastname: existingUser.lastname,
                email: existingUser.email,
                role: existingUser.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Error occurred during login",
            error: error.message
        });
    }
};



module.exports = {
    signupUser,
    loginUser
};
