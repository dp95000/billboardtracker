// Requiring path to so we can use relative routes to our HTML files
import path from 'path';

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/login", function(req, res) {
        // if (req.user) {
        //     res.redirect("/inventory");
        // }
        res.sendFile(path.join(__dirname, "/login"));
    });

    app.get("/dashboard", function(req, res) {
        res.sendFile(path.join(__dirname, "/dashboard"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/dashboard", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "/dashboard"));
    });

    app.get("/signup", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/signup"); //changed from /inventory
        }
        res.sendFile(path.join(__dirname, "/signup"));
    });

};