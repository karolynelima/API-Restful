//CONFIG INICIAL
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler JSON /middlewares
//inicializando config de leitura do JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
//finalizando config de leitura do JSON
app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res) => {
    //mostrar req
    res.json({ message: 'Oi Express!' })//a resposta pra rota '/' será um json
})


//entregar porta
//Conexão com o Banco
const DB_USER = encodeURIComponent('admin')
const DB_PASSWORD = encodeURIComponent('4h11NSQlOfLLhyfs')
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.g1dhi.mongodb.net/APIdatabase?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log("Conectado ao MongoDB!")
        app.listen(3000)
    })//conected
    .catch((err)=> console.log(err))//error


