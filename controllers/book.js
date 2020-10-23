const BookModel = require('../models/book')

/**
 * Metodos para registrar un nuevo libro
 * @param {*} req  => todo lo que se recibe
 * @param {*} res  => Respuesta que  se devuelve
 */

exports.create = (req, res) => {
    if(Object.entries(req.body).length == 0){
        return res.status(400).send({
            messege: 'Todos los datos deben estar llenos'
        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body. author,
        pageNumber: req.body.pageNumber,
        publisher: req.body. publisher,
        publicationDate: req.body. publicationDate,
        genre: req.body.genre
    
    })

    book.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                messege: error.messege
            })
        }
    )
}