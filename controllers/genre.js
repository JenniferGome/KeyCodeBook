const GenreModel = require('../models/genre')

/**
 * metodo para crear un nuevo genero
 * @param {*} req => todo lo que  le estamos enviando
 * @param {*} res => rsepuesta  que devolvera
 */
exports.create = (req, res) => {
    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los campos son obligatorios.'
        })
    } 

    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status,
    })

    genre.save()
    .then(
        (dataGenre) => {
            res.send(dataGenre)
        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.getAll = (req,res) => {
    GenreModel.find()
    .populate('genre')
    .exec()
    .then( (genres) => { res.send(genres) })
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
} 
exports.getOne = (req, res) => {
    GenreModel.findById(req.params.id)
    .populate('genre')
    .then( (genre) => { req.send(genre) })
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
} 
