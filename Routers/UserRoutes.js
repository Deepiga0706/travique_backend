const Express= require("express");
const router=Express.Router(); 
const SignUpUser=require("../Controllers/UserController"); 

router.post("/signup",SignUpUser);
module.exports=router;