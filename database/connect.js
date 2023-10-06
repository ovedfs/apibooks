const { Sequelize } = require('sequelize');

const connect = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
});

(async () => {
  try {
    await connect.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
})()

module.exports = connect