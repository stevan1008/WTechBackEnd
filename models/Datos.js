const mongoose = require('mongoose')
const datosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Datos', datosSchema)    