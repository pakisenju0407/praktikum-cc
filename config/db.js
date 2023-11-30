const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_pakisenju',
    password: '7H6es4VZsVjC?5z',
    database: 'freedb_sequelize-todo'
});

module.exports = sequelize