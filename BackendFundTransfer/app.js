const express = require('express');
const app = express();
const indexRouter = require('./Routes/index');
const authRouter = require('./Routes/auth');
const adminRouter = require('./Routes/admin');
const bankdetRouter = require('./Routes/Bankdet');
const expressSession = require("express-session");
const path = require("path");

require('dotenv').config();
require("./config/db");
require("./config/google_oauth_config");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
}));


app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use('/bankdetails', bankdetRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});