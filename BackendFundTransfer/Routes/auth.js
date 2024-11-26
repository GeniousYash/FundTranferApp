const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/google", passport.authenticate("google",{
    scope: ['profile', 'email'],
}) , 
// function(req,res){}
);

router.get(
    "/google/callback", 
    passport.authenticate("google",{
        successRedirect: "/profile",
        failureRedirect: "/",
    }),
    // function(req,res){}
)

// router.get("/logout", function(req, res, next){
//     req.logout(function(err){
//         if(err){
//             return next(err);
//         }
//         res.redirect("/");
//     });
// })

router.get("/logout", async function(req, res, next) {
    try {
        await req.logout();
        res.redirect("/");
    } catch (err) {
        next(err);
    }
});

module.exports = router;