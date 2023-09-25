const express = require('express');
const router = express.Router();
const booksControllers = require('../controllers/bookControllers');


router.get('/', booksControllers.getBooks)
router.get('/:id', booksControllers.getById)
router.post('/create', booksControllers.createBook)
router.patch('/:id', booksControllers.updateBook)
router.delete('/:id', booksControllers.deleteBook)


module.exports = router