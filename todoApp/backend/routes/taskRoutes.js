const express = require("express");

const router = express.Router();

const {
	createTask,
	getTasks,
	getTaskById,
	updateTask,
	deleteTask,
	getTasksByProject,
} = require("../controllers/taskController");

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
router.get("/project/:projectId", getTasksByProject);

module.exports = router;
