const express = require('express');
const router = express.Router();
const User = require('../models/signupSchema')

router.post('/', async(req,res)=>{
    const{fname,email,password} = req.body;
     try{
        const newUser = new User({ fname,email,password});
        await newUser.save();
        return res.status(201).json({message: "User Signup Successful"})
     } catch(err){
        console.error("Signup error:", err.message);
        return res.status(500).json({message: "Signup failed"})
     }
});

module.exports = router;