const express = require("express");
const router = express.Router();
const { bankdetModel } = require("../Models/Bankdet");

router.post("/userdetails", async function(req,res){
    const { accountHolderName, accountNumber, ifscCode, bankName, branchName, phoneNumber, email, transactionLimit, isActive } = req.body;
    console.log(req.body);
    try {
        const userdet = new bankdetModel({
            accountHolderName, 
            accountNumber, 
            ifscCode, 
            bankName, 
            branchName,
            phoneNumber, 
            email,
            transactionLimit,
            isActive,
        });
        await userdet.save();
        res.send("User Details Saved Sucessfully!");
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = router;