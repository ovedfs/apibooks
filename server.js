const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const booksRouter = require('./routes/books')

app.use(express.json())

app.use('/books', booksRouter)

app.listen(port, () => {
  console.log(`🛰 Servidor corriendo en http://localhost:${port}`);
})