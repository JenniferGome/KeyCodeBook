module.exports = (app) => {
    const genre = require('../controllers/genre')

    app.post('/genre/create', genre.create)
    app.get('/genre/getAll', genre.getAll)
}