const express = require('express');
const router = express.Router();
const Signup = require("../models/signupSchema")
router.post('/login',async(req,res) =>{
    const {username ,password} = req.body;
    const existingUser = await Signup.findOne({uname: username});
    if(!existingUser){
        return res.status(400).json({"message":"User not found", "isLogin": false});
    }
    else{
        if(existingUser.password !== password){
            console.log(existingUser.password,password);
            return res.status(400).json({"message":"Incorrect Password", "isLogin": false});
        }
        else{
            return res.status(200).json({"message":"Login Successful", "isLogin": true});
        }
    }
})

module.exports = router;