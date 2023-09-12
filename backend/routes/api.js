const express = require('express');
const apiRouter = express.Router();
const User = require('../models/User');

//get users api
apiRouter.get('/users', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    await User.findAll()
    .then((users) =>{
       res.json(users);
    }).catch((error) =>{
        console.log('Error finding');
    })
    
});

module.exports = apiRouter;