const Project = require("../models/Project");

//get all projects
exports.getAllProjects = async (req, res) => {
	try {
		const projects = await Project.find();
		res.json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//crete a single project
exports.createProject = async (req, res) => {
	try {
		const newProject = new Project(req.body);
		const savedProject = await newProject.save();
		res.status(201).json(savedProject);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//get single project
exports.getProjectById = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id);
		if (!project)
			return res.status(400).json({ message: "Project not found!" });

		res.json(project);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//delete a project
exports.deleteProject = async (req, res) => {
	try {
		// const deleted = await Project.findOneAndDelete(req.params.id);
		const project = await Project.findById(req.params.id);
		if (!project) return res.status(404).json({ message: "Project not found" });

		// this triggers middleware
		await project.deleteOne();

		res.json({ message: " Project successfully deleted!" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
