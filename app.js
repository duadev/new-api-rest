const express = require('express');
const colors = require('colors');
const morgan = require('morgan')
const { conn } = require('./src/connection/conn')


require('dotenv').config();
const app = express();
app.use(morgan('dev'))

app.use('/', (req, res) => {

    res.send('Hola mundo')
});

conn();
const port = process.env.PORT || 3000

app.listen(port, () => {

    try {

        console.log(colors.blue(`Server listening successfully on port http://localhost:${port}`))

    } catch (error) {

        console.log(colors.red('Failed to listen on server port:', error))

    }

})