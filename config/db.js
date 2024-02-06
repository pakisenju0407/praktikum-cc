const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_pakirohandi',
    password: 'qq@H9MYjp$ru6?G',
    database: 'freedb_todolist_sequalize'
});

module.exports = sequelize