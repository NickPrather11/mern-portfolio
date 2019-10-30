const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routers");
const PORT = process.env.PORT || 3001;
const app = express();
const Project = require("./models/projectModel");
const projectsArray = require("./controllers/seedBuilder");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to MongoDB
mongoose.connect("mongodb://localhost/portfolio", { useNewUrlParser: true });

//Build seeds
projectsArray.forEach(item => {
  Project.create(item)
    .then(dbProject => {
      console.log(dbProject);
    })
    .catch(err => {
      console.log(err.message);
    });
});

//asigned listener to a variable
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
