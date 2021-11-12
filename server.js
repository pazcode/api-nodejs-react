//requiero express que es el modulo que instale

const express = require('express')
const app = express()
const cors = require('cors')
//VARIABLE DE AMBIENTE POR SI DESPLIEGO LA APLICACION
app.set('port', process.env.PORT || 9000)

//servidor en mysql
const mysql = require('mysql')
const myconn = require('express-myconnection')
const dbOptions= {
    host: 'localhost',
    port: 3306,
    user : 'root',
    password: '',
    database: 'crudNode'
}
//midlewares USAR SIEMPRE ANTES DE LAS RUTAS SINO ME TIRA ERROR-----------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//para pasarle las rutas
const routes = require('./routes')
app.use('/api', routes)



app.listen(app.get('port'),()=>{
    console.log("server running on port" , app.get('port'))
})


//ruta principal
app.get('/', (req,res)=>{
    res.send("welcome to my app")
})
