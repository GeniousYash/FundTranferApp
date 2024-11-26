const express = require("express");
const router = express.Router();
const { adminModel } = require("../Models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

if(
    typeof process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "DEVELOPMENT"
){
    router.get("/create",async function(req,res){
        try {
            let salt = await bcrypt.genSalt(10);
            let hash = await bcrypt.hash("admin", salt);

            let user = new adminModel({
                name: "Yash",
                email:"singhyash3012@gmail.com",
                password: hash,
                role: "admin",
            });
            await user.save();

            let token = jwt.sign({email: "singhyash3012@gmail.com"}, process.env.JWT_KEY);
            res.cookie("token", token);
            res.send("admin created successfully");
        } catch (err) {
            res.send(err.message);
        }
    });
}

module.exports = router;