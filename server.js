const express = require("express");
const path = require("path");
var session = require("express-session");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(cors());
//const apiRoutes = require("./routes/api-routes");
//app.use(apiRoutes);

// Requiring passport as we've configured it
var passport = require("./config/passport");
require('dotenv').config();

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
