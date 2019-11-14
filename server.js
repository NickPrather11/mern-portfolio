const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routers");
const PORT = process.env.PORT || 3001;
const app = express();
// const Project = require("./models/project");
// const projectsArray = require("./db/projectsObj");

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

//  *** BUILD SEEDS ***
// *** maybe just add and update manually? ***

// projectsArray.forEach(item => {
//   // add code to search the database for item.name and only create if it doesn't exist
//   Project.create(item)
//     .then(dbProject => {
//       console.log(dbProject);
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

//asigned listener to a variable
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
