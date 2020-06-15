const express = require("express");
const path = require("path");
var session = require("express-session");
var passport = require("./config/passport");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;

const cors = require("cors");
const db = require("./models");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('dotenv').config();

app.use(cors());
//const apiRoutes = require("./routes/api-routes");
//app.use(apiRoutes);

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes.js")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
