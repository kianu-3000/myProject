const express = require('express');
const dotenv = require('dotenv').config();
const sequelize = require('./config/sequelize');
const app = express();

// import database models
const User = require('./models/User');

// middleware
app.use(express.static('public')); // serves static files inside public folder
app.use(express.urlencoded({extended: false})); // handles forms
app.use((req, res, next) => {
    // Set no caching headers
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Expires', '0');
    res.setHeader('Pragma', 'no-cache');
    // Continue processing the request
    next();
});

// Routes
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const apiRouter = require('./routes/api');
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/', userRouter);


// syncing database on run time
sequelize.sync().then(() => {
    console.log('Table users created successfully');
    app.listen(process.env.PORT, process.env.IP, () => {
        console.log(`Server (${process.env.IP}) Running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
