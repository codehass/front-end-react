const mongoose = require("mongoose");
const Task = require("./Task");

const projectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

//  Middleware: Delete tasks when a project is deleted
projectSchema.pre(
	"deleteOne",
	{ document: true, query: false },
	async function (next) {
		console.log("🗑 Deleting tasks for project:", this._id);
		await Task.deleteMany({ project: this._id });
		next();
	}
);

module.exports = mongoose.model("Project", projectSchema);
