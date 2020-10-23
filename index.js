const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const { conectDB } = require('./db')
const app = express() 

app.use(cors())
app.use(bodyParser.json())


conectDB()

require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)

app.listen(3000, () => {
    console.log('Se levanto el servidor.')
})

