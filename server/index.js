require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {json} = require('body-parser');
const session = require('express-session');
const {register, login, logout, getUser} = require('./controller/authController');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    console.log('Connected to database')
})

app.use(session ({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7  * 2
    }
}))

//thid id the auth controller
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
app.get('/auth/user', getUser)

const port = process.env.SERVER_PORT || 6969;
app.listen(port, () => {console.log(`Listening on port ${port}`)})
