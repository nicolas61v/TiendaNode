const mongoose = require('mongoose')

let esquemaReserva = new mongoose.Schema({

    nombre:{
        type:String,
        required: [true, 'El nombre es necesario querido amig@']
    },
    apellido:{
        type:String,
        required: [true, 'El apellido es necesario mi amig@']
    },
    telefono:{
        type:Number,
        required: [true, '¿Aló?, ¿hablo con la muerte?, ¡amigo el telefono!']
    },
    fechaInicio:{
        type:Date,
        require: [true, 'amigo... ¿cuando?']
    },
    fechaFinal:{
        type:Date,
        required:[true, 'pero por favor... ¿hasta cuando?']
    },
    numeroPersonas:{
        type:Number,
        required:false
    },
    tipoPaquete:{
        type:String,
        required: [true,'necesitamos conocer su poder adquisitivo']
    }
});

module.exports  = mongoose.model('model-reservas',esquemaReserva);