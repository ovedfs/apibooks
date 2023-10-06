const connect = require('./connect')
const {DataTypes} = require('sequelize')

const Book = connect.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.STRING
  },
  cover: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'books'
});

(async() => await Book.sync({forced:true}))()

module.exports = Book