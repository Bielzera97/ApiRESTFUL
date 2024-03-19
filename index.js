require('dotenv').config()
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

// rotas da api 

const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes)


// rota inicial // endpoint
app.get('/', (req, res) => {

    //mostrando requisicao

    res.json({message: 'Oi Express'})


})


// entregar um porta

const DB_Login = process.env.DB_user
const DB_Password = encodeURIComponent(process.env.DB_password)

mongoose.connect(`mongodb+srv://${DB_Login}:${DB_Password}@apicluster.jgzw5pz.mongodb.net/`)
.then(() => {
    app.listen(3001)
    console.log('conectado ao MongoDB')
   
})
.catch((err) => console.log(err))

