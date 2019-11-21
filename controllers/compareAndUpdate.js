const db = require("../models");
const projectsArray = require("../db/projectsObj");

module.exports = {
  compareAndUpdate: function() {
    //compare database to project array and update database if there are any differences
    db.Project.find({}).then(dbModel => {
      let dbNames = [];
      dbModel.forEach(item => dbNames.push(item.name));
      projectsArray.forEach(paItem => {
        dbModel.forEach(dbItem => {
          if (paItem.name === dbItem.name) {
            let id = dbItem._id;
            if (paItem.description !== dbItem.description) {
              //update description
              db.Project.updateOne({ _id: id }, { description: paItem.description }, { new: true }).catch(err =>
                res.status(422).json(err)
              );
            }
            if (paItem.image !== dbItem.image) {
              //update image
              db.Project.updateOne({ _id: id }, { image: paItem.image }, { new: true }).catch(err =>
                res.status(422).json(err)
              );
            }
            if (paItem.deployedLink !== dbItem.deployedLink) {
              //update deployedLink
              db.Project.updateOne({ _id: id }, { deployedLink: paItem.deployedLink }, { new: true }).catch(err =>
                res.status(422).json(err)
              );
            }
            if (paItem.githubLink !== dbItem.githubLink) {
              //update githubLink
              db.Project.updateOne({ _id: id }, { githubLink: paItem.githubLink }, { new: true }).catch(err =>
                res.status(422).json(err)
              );
            }
          } else if (dbNames.indexOf(paItem.name) < 0) {
            //creates new project object in the database
            db.Project.create(paItem)
              .then(dbProject => {
                console.log("New project added: ", dbProject);
              })
              .catch(err => {
                console.log(err.message);
              });
          }
        });
      });
    });
  }
};
