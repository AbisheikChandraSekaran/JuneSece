const express = require('express');
const dotenv = require("dotenv");
const signupController = require("./controllers/signup");
const loginController = require("./controllers/login");
const mdb = require('mongoose');
const cors = require('cors')

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

mdb.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error("Connection error to MongoDB:", err.message);

})

app.use(express.json())
app.use(cors())


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send("This makes the backend up and running");
})

app.use('/signup',signupController)
app.use('/login',loginController)