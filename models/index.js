const { Sequelize } = require('sequelize');
const UserModel = require('./user');
const TodoModel = require('./todo');
const sequelize = require('../config/db');

const models = {
	Todo: TodoModel,
	User: UserModel,
	sequelize: sequelize,
};

Object.keys(models).forEach((key) => {
	if ('associate' in models[key]) {
		models[key].associate(models);
	}
});

module.exports = models;
