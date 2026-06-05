const user=require("../Models/UserModel");

const signupUser=async(req,res)=>{
    try{
    const {firstname,lastname,email,phone,password,confirmpassword}=req.body;
    const NewUser=new User({
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmpassword,
    });
    const savedUser=await NewUser.save();
    res.status(202).json({
        message:"User registered successfully",
        data:savedUser,
    });
    }
    catch(error){
        res.status(500).json({
            message:"Error occurred while registering user",
            error:error.message
        });
    }
};
module.exports=signupUser


