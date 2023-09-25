const { json } = require('express');
const books = require('../models/books');

//Elimina album por Id
exports.deleteBook = async(req, res) => {

    try {
        const bookOne = await books.findById(req.params.id) 
        let _id = bookOne._id;
        if(_id){
            await books.findByIdAndDelete(_id)
        }
        res.status(200).json({message: 'El libro fue eliminado exitosamente'})
        
    } catch (error) {
        res.status(500).json({error: 'El libro no fue encontrado'})
    }
}

// Busca album por Id
exports.getById = async(req, res) => {
    try {
        const bookOne = await books.findById(req.params.id)
        res.json(bookOne)

    } catch (err) {
        res.status(404).json({err: 'Libro no encontrado'})
    }
}

//Trae todos los libros
exports.getBooks = async(req, res) => {
    try {
        const libros = await books.find()
        res.json(libros)

    } catch (err) {
        res.status(500).json({err: 'Error al obtener los datos'})
    }
}

//Crea un libro
exports.createBook = async(req, res) => {
    try {
        
        const {registration, author, title, editorial, release_date, No_of_pages, language,
            year_of_edition, image_url, description} = req.body;

        const newBook = new books({
            registration, 
            author, 
            title, 
            editorial, 
            release_date, 
            No_of_pages, 
            language,
            year_of_edition, 
            image_url, 
            description
        })
        const saveBook = await newBook.save()

        res.status(201).json(saveBook)

    } catch (err) {
        res.status(500).json({err:'Error al crear el Libro'})
        
    }
}

exports.updateBook = async(req, res) => {
    try {
        
        const {id} = req.params;
        await books.updateOne({_id: id}, {...req.body})
        const updateBook = await books.findById(id)
        return res.status(200).json(updateBook)

    } catch (err) {
        res.status(500).json({err:'No se pudo modificar los datos del libro'})
        
    }
}