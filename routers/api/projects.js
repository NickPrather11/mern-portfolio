const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router.route("/").get(projectsController.findAll);
router.route("/:id").get(projectsController.findById);

module.exports = router;
