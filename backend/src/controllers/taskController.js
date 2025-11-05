import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
	try {
		const task = await Task.find();

		res.json(task);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error al obtener las tareas", error: error.message });
	}
};

export const createTask = async (req, res) => {
	try {
		const { title, description, completed, createdAt } = req.body;

		const task = new Task({
			title,
			description,
			completed,
			createdAt,
		});

		await task.save();

		res.status(201).json({
			message: "Tarea creada exitosamente",
			task,
		});
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error al crear tarea", error: error.message });
	}
};

export const updateTask = async (req, res) => {
	try {
		const { title, description, completed, createdAt } = req.body;
		const task = await Task.findOneAndUpdate(
			{ _id: req.params.id },
			{
				title,
				description,
				completed,
				createdAt,
			},
			{ new: true, runValidators: true }
		);
		if (!task) {
			return res.status(404).json({ message: "Tarea no encontrada" });
		}
		res.json({
			message: "Tarea actualizada exitosamente",
			task,
		});
	} catch (error) {
		res.status(500).json({
			message: "No se pudo actualizar la tarea",
			error: error.message,
		});
	}
};

export const deleteTask = async (req, res) => {
	try {
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
		});

		if (!task) {
			return res.status(404).json({ message: "Tarea no encontrada" });
		}

		res.json({ message: "Tarea eliminada exitosamente", task });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error al eliminar tarea", error: error.message });
	}
};
