const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    registration: String, 
    author: String, 
    title: String, 
    editorial: String, 
    release_date: String, 
    No_of_pages: String, 
    language: String,
    year_of_edition: String, 
    image_url: String, 
    description: String
   
})

module.exports = mongoose.model('books', bookSchema)