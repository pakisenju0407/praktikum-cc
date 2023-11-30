const { Todo, User } = require('../models');

const getAllTodos = async (req, res) => {
	try {
		const todos = await Todo.findAll({
			include: User,
		});
		res.json(todos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

// ...

const createTodo = async (req, res) => {
	const { task, description, completed } = req.body;

	try {
		const todo = await Todo.create({
			task,
			description,
			completed,
		});

		res.status(201).json(todo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

// ...

const getTodoById = async (req, res) => {
	const { id } = req.params;

	try {
		const todo = await Todo.findByPk(id, {
			include: User,
		});

		if (!todo) {
			return res.status(404).json({ error: 'Todo not found' });
		}

		res.json(todo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const updateTodo = async (req, res) => {
	const { id } = req.params;
	const { task, description, completed } = req.body;

	try {
		const todo = await Todo.findByPk(id);

		if (!todo) {
			return res.status(404).json({ error: 'Todo not found' });
		}

		// Update todo properties
		todo.task = task || todo.task;
		todo.description = description || todo.description;
		todo.completed = completed || todo.completed;

		// Save the updated todo
		await todo.save();

		res.json(todo);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const deleteTodo = async (req, res) => {
	const { id } = req.params;

	try {
		const todo = await Todo.findByPk(id);

		if (!todo) {
			return res.status(404).json({ error: 'Todo not found' });
		}

		await todo.destroy();

		res.json({ message: 'Todo deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const deleteAllTodos = async (req, res) => {
	try {
		await Todo.destroy({
			where: {},
			truncate: true,
		});

		res.json({ message: 'All todos deleted successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {
	getAllTodos,
	createTodo,
	getTodoById,
	updateTodo,
	deleteTodo,
	deleteAllTodos,
};
