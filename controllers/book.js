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

exports.update = (req,res) => {
    if(Object.entries(req.body).length == 0){
        return res,estatus(400).send({
            message:'Todos los datos deben estar llenos'
        })
    }

    const book = {
        name : req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    }

    BookModel.findByIdAndUpdate(req.params.id, book, {new:true})

    .then(
        (bookUpdate) => {
            res.send(bookUpdate)
        }
    )
    .catch(
        (error) => {
            return res.status(500).send({
                message: error.menssage
            })
        }
    )
}
 exports.getAll = (req,res) => {
    BookModel.find()
    .populate('genre')
    .exec()
    .then( (books) => { res.send(books) })
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
} 

/**
 * Metodos para obtener un solo  libro
 * @param {*} req  => todo lo que se recibe
 * @param {*} res  => Respuesta que  se devuelve
 */
exports.getOne = (req,res) => {
    BookModel.findById(req.params.id)
    .populate('genre')
    .exec()
    .then( (books) => { res.send(books) })
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )

}
/**
 * Metodos para eliminar un solo  libro
 * @param {*} req  => todo lo que se recibe
 * @param {*} res  => Respuesta que  se devuelve
 */
exports.deleteOne = (req, res) => {
    BookModel.findByIdAndRemove(req.params.id)
    .then( (book) => { res.send(book) } ) 
    .catch(
        (error) => {
            res.status(500).send({
                menssage: error.menssage
            })
        }
    )

}