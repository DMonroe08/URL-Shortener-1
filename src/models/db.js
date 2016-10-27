const Sequelize = require('sequelize');
require('dotenv').config;
const sequelize = new Sequelize(process.env.DB_NAME,proccess.env.DB_USER, process.env.DB_PASS{
	host:porocess.env.DB_HOST;
	dialect:process.env.DB_SCHEMA;
	port:process.env.DB_PORT;
	pool:{
		max:5,
		min:0,
		idle:1000,
	},
	logging:false,
})

const genre = sequelize.define('genre', {
	id:{type:Sequelize.INTEGER,}, 
	name:{type:Sequelize.STRING,}
});

const book = sequelize.define('book', {
	id:{type:Sequelize.INTEGER,}, 
	name:{type:Sequelize.STRING,},
	genre:{type:Sequelize.INTEGER}
});

genre.hasMany(book,{
	foreignKey:'genreID',
})

sequelize.sync();
export.sequelize = sequelize;
export.genre = genre;
export.book = book;