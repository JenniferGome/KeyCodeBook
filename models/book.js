const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({ 
    name: { type: String, required: true }, //Nombre Libro
    author:{ type: String, required: true },// Nombre autor del libro
    pageNumber: { type: Number },//Numero de paginas
    publisher: { type: String, required: true }, // Editorial
    publicationDate: {type: Date }, // Fecha de publicacion 
    //genre:{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}// un libro tiene solo un genero
    genre: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }] // un libro tiene muchos generos

})
 module.exports = mongoose.model('Book', bookSchema)