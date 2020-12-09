//express clarisimo
const express = require('express')
const app = express()

//body-parser clarisimo
const bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//paquete del modelo
const modeloRerserva
 = require('./model-reservas');

//paquete underscore
let under = require('underscore');
const modeloReserva = require('./model-reservas')
const { result } = require('underscore')

//operaciones del hotel 
app.get('/reservas/:id', function(request, aswer){
    let identificador = request.params.id;

    modeloRerserva
    .findById(identificador, (err, result) => {
        
        if (err){
            aswer.status(400).json({
                mensaje:err,
                estado:false
            })
        } else {
            aswer.json({
                reserva:result
            })
        }
    })
});

app.post('/reservas', function(request, aswer){
    let data = request.body
    
    let reservaGuardar = new modeloRerserva
    ({

        nombre:data.nombre,
        apellido:data.apellido,
        telefono:data.telefono,
        fechaInicio:data.fechaInicio,
        fechaFinal:data.fechaFinal,
        numeroPersonas:data.numeroPersonas,
        tipoPaquete:data.numeroPersonas
    
    });

    reservaGuardar.save((err, result) => {

        if(err) {
            aswer.status(400).json({
                
                mensaje: err,
                estado:false
            })
            
        }else {

            aswer.json({
                mensaje:'su reserva quedo onfire'
            })
        }
    })
});

app.put('/reservas/:id', function(request, aswer){
    
    let data = request.body;
    let datosActualizar = under.pick(data,['fechaInicio','fechaFinal','numeroPersonas','tipoPaquete']);
    let identificador = request.params.id;

    modeloRerserva.findByIdAndUpdate(identificador,datosActualizar,(err,result) => {
        if (err) {
            aswer.status(400).json({
                mensaje:err,
                estado:false
            })
        }else{
            aswer.json({
                mensaje:'reserva editado con exito'
            })
        }
    });

});

app.delete('/reservas/:id', function(request, aswer){
    let identificador = request.params.id;
    modeloRerserva.findByIdAndRemove(identificador, (err,result) => {
        if (err){
            aswer.status(400).json({
                mensaje:err,
                estado:false
            })
        }else {
            aswer.json({
                mensaje:'su reserva se fue al carré'
            })
        }
    })

    
});

module.exports = app;