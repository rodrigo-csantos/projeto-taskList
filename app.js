const express = require('express') // Importando o express

const app = express() // definindo a variável app recebe o express

app.use(express.json()) // Define que o app vai utilizar o express e estender do express o JSON (permite receber um json em requests)

require('./routes/app.routes')(app)

module.exports = app