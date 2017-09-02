// Include Server Dependencies
let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let mongoose = require("mongoose");

// Require Click schema
let Click = require("./models/Article");

// Create a new express app
let app = express();
// Sets an initial port. We'll use this later in our listener
let PORT = process.env.PORT || 3000;
let devConnection = `mongodb://localhost:${PORT}/nytreact`;
// let prodConnection = MONGO URI =>

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect(devConnection);
let db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
