import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "El título es requerido"],
			trim: true,
		},
		description: { type: String, trim: true, default: "" },
		completed: { type: Boolean, default: false },
		createdAt: { type: Date },
	},
	{ timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
