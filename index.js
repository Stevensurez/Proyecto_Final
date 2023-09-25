const express = require('express');
const cors = require('cors');
const app = express();

const connectDataBase = require('./server/data/database');
const booksRoutes = require('./server/routers/routes');

//Conexion a la base de datos mongoDB
connectDataBase();

//Middleware para manejar el JSON
app.use(express.json())

app.use(cors())

app.use('/', booksRoutes)


const PORT = 3000;

app.listen(PORT, () => {
    console.log('Servidor escuchando por el puerto:', PORT)
})

