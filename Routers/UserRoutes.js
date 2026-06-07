const Express= require("express");
const router=Express.Router(); 
const {
    signupUser,
    loginUser
} = require("../Controllers/UserController");


router.post("/signup", signupUser);
router.post("/login", loginUser);
module.exports=router;