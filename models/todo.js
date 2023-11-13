const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Todo = sequelize.define('todo', {
	task: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});

Todo.belongsTo(User);
User.hasMany(Todo);

module.exports = Todo;
