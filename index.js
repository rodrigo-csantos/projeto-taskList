const app = require('./app') // importando a aplicação para subir o servidor

const port = 3000 || process.env.PORT // define uma porta para o funcionamento do servidor ou ele vai buscar na hospedagem/cloud uma variável de ambiente chamada PORT ele pega o valor da porta atribuída

app.listen(port, () => {console.log('Running...')}) //inicia o servidor HTTP e começar a ouvir conexões em uma porta específica. Ele é usado para configurar o servidor Express para responder às solicitações HTTP enviadas para o seu aplicativo.