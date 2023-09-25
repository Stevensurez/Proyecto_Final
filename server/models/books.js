const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name: String,
    apellido: String
   
})

module.exports = mongoose.model('books', bookSchema)