const mongoose = require('mongoose')// paquete que permite la comunicacion con la base de tados
const config = require('./config')
const conectDB = () => {
    /**seNewUrlPars: aliza  la informacion que se le quiere enviar a 
     *mongoDB.
     useUnifiedTopology:escucha los llamados que hacemos a mongo DB y monitorea
     que es lo que pasa
     */
    mongoose.connect(config.mongoDB,{ useNewUrlParser: true, useUnifiedTopology:
    true }, (error) => {
        if(error){
            console.log('Error: ', error)
        }else{
            console.log('Nos conectamos a la DB')
        }

        })
    }
    /**
     * module.exports 
     * nos permite exportar una funcion para que pueda ser utilizada en 
     */
    module.exports = { conectDB }
