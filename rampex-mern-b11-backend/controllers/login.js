const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log(`Username: ${username}, Password: ${password}`);
    
 
    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;