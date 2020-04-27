const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://tdj03001:101%Sure!!@ds221095.mlab.com:21095/heroku_x1c0054f");

// app.listen(PORT, function () {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
