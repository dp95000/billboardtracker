const Sequelize = require('Sequelize')
const db ={}
const Sequelize = new Sequelize("", "postgres", "", {
    host: 'localhost', 
    dialect:'mysql', 
    operatorsAliases: false,

    pool: {
        max: 5, 
        min: 0, 
        acquire: 3000, 
        idle: 10000
    }
}); 

//Using Database
const db =require('./config/database'); 
//Connection Testing
db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error' + err))
db.Sequelize = Sequelize
db.Sequelize = Sequelize

module.exports = db
