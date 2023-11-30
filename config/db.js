const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: 'sql.freedb.tech',
	dialect: 'mysql',
    username: 'freedb_pakisenju',
    password: 'Fpr&Wt2#Kaau*23',
    database: 'freedb_sequelize-todo'
});

module.exports = sequelize