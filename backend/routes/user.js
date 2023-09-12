const express = require('express');
const {profile} = require('../controllers/userController');
const userRouter = express.Router();

//Home Page
userRouter.get('/home', (req, res) => {
    // Sample Data
    res.send('Home Page');
});

// example
userRouter.get('/profile', profile);

module.exports = userRouter;