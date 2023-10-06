const Book = require('../database/Book')

const getAllBooks = async (req,res) => {
  try {
    const books = await Book.findAll()
    res.status(200).json(books)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const getBook = async (req,res) => {
  try {
    const {id} = req.params
    const book = await Book.findByPk(id)

    if(book) res.status(200).json(book)
    else res.status(404).json({'msg': 'Book not found!'})
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const createBook = async (req,res) => {
  console.log(req.body);
  try {
    const {title, description, author} = req.body
    const book = await Book.create({
      title: title,
      author: author,
      description: description,
      cover: req.file.path
    })
    res.status(200).json(book)
    console.log(req.file, req.body)
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const updateBook = async (req,res) => {
  try {
    const {id} = req.params
    const book = await Book.findByPk(id)
    if(!book) res.status(404).json({'msg': 'Book not found!'})
    else {
      // const {title, description, author} = req.body
      // book.title = title ? title : book.title
      // book.description = description ? description : book.description
      // book.author = author ? author : book.author
      // await book.save()
      await book.update(req.body)
      res.status(200).json(book)
    }
  } catch (error) {
    res.status(404).json(error.message)
  }
}

const deleteBook = async (req,res) => {
  try {
    const {id} = req.params
    const book = await Book.findByPk(id)
    await book.destroy()
    res.status(200).json({'msg': 'Book deleted!'})
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook
}
