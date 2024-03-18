
//config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose')

// forma de ler JSON // middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rota inicial // endpoint
app.get('/', (req, res) => {

    //mostrando requisicao

    res.json({message: 'Oi Express'})


})


// entregar um porta

mongoose.connect('mongodb+srv://ramosgsrc:gabriel123@apicluster.jgzw5pz.mongodb.net/')
.then(() => {
    app.listen(3000)
    console.log('conectado ao MongoDB')
   
})
.catch((err) => console.log(err))


app.listen(3000)