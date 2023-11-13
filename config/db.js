const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'localhost',
	dialect: 'mysql',
    username: 'root',
    password: '',
    database: 'sequelize-todo'
});

module.exports = sequelize