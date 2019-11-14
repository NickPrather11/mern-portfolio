const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  deployedLink: {
    type: String,
    required: true
  },
  githubLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "No description available yet"
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
