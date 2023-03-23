const express = require("express");
const app = express();

// --------------STATIC FILES---------------
app.use(express.static("public"));

// ------------------GET-------------------
app.get("/", function (req, res) {
  res.render("index.html");
});

// -----------------LISTEN------------------------
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening at port 3000");
});
