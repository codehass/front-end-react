const Task = require("../models/Task");

// create new task
exports.createTask = async (req, res) => {
	try {
		const task = new Task(req.body);
		const savedTask = await task.save();
		res.status(201).json(savedTask);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// get all tasks
exports.getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.json(tasks);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// get a single task
exports.getTaskById = async (req, res) => {
	const { id } = req.params;

	try {
		const task = await Task.findById(id);
		if (!task) return res.status(404).json({ message: "Task not found" });
		res.json(task);
		res.status(201).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

//Update a task
exports.updateTask = async (req, res) => {
	try {
		const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!updatedTask)
			return res.status(404).json({ message: "Task not found" });
		res.json(updatedTask);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.deleteTask = async (req, res) => {
	try {
		const deletedTask = await Task.findOneAndDelete(req.params.id);
		if (!deletedTask)
			return res.status(404).json({ message: "Task not found!" });
		res.json({ message: "Task deleted!" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

exports.getTasksByProject = async (req, res) => {
	try {
		const tasks = await Task.find({ project: req.params.projectId });
		res.json(tasks);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
