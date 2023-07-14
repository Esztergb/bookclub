const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, "public")));
// // Sets up the routes
// app.use(require("./controllers/dish-routes"));

//serves our temporary html...remove once handelbars and rout files are created

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
