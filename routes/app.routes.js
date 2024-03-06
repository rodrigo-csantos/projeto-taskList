module.exports = app => {
    const router = require('express').Router()

    const appHandler = require('../handler/app.handler')

    router.get('/', appHandler.wellcome)

    // criar tarefa
    router.post('/task', appHandler.createTask)

    // Listar tarefas
    router.get('/tasks', appHandler.listAllTasks)

    // Detalhar tarefa
    router.get('/task/:id', appHandler.detailsTask)

    // Excluir tarefa
    router.delete('/task/:id', appHandler.deleteTask)

    // Atualizar status tarefa
    router.put('/task/:id', appHandler.updateTaskStatus)

    app.use('/api', router)
}