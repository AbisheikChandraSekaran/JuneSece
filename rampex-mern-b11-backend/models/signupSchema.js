const mdb = require("mongoose");
const signupSchema = new mdb.Schema({
    fname: String,
    lname:String,
    uname:String,
    email:String,
    password:String,
})
const signup_schema = mdb.model("signup", signupSchema);
module.exports = signup_schema;