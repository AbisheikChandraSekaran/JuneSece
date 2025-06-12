const express = require("express");
const router = express.Router();
const Signup = require("../models/signupSchema")

router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test Route is working fine" });
});
router.post("/signup", async (req, res) => {
  const { fname, lname, uname, email, password } = req.body;
  // console.log(fname, lname, uname, email, password);
  const newUser = new Signup({
    fname:fname,
    lname:lname,
    uname:uname,
    email:email,
    password:password
  })
  newUser.save()
  res.status(200).json({ message: "User Sign up Successful", isSignup: true });
});

module.exports = router;