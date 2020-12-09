//express clarisimo
const express = require('express')
const app = express()

//body-parser clarisimo
const bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//mongoose para la base de MongoDB
const mongoose = require('mongoose')

app.use(require("./controller-reservas"));

mongoose.connect('mongodb://localhost:27017/bdreservas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose .connection
.once('open', () => console.log("estas onfire"))
.on('error', (error) => console.log(error))

//la ruta para conectarnos al servidor 
app.listen(3000, () => {
    console.log("el servidor esta onfire")
});