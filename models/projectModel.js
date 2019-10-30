const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
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
    required: true
  }
});

module.exports = Project;
