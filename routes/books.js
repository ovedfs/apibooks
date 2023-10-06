const express = require('express')
const router = express.Router()
const {getAllBooks, createBook, getBook, updateBook, deleteBook} = require('../controllers/BooksController')
const upload = require('../libs/upload')
const mymid = require('../mymid')

// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

router.get('/', mymid, getAllBooks)
router.get('/:id', getBook)
router.post('/', upload.single('cover'), createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router