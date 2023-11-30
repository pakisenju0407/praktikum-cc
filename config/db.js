const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_pakisenju',
    password: 'uNAtG3Y5#5spEpR',
    database: 'freedb_sequelize-todo'
});

module.exports = sequelize