const express = require("express");
const router = express.Router();

const {
	getAllProjects,
	createProject,
	getProjectById,
	deleteProject,
} = require("../controllers/projectController");

router.post("/", createProject);
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.delete("/:id", deleteProject);

module.exports = router;
