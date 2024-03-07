const { Task } = require('../models/index')

exports.wellcome = (req, res) => {
    res.send("Seja bem vindo ao meu app!")
}

exports.createTask = (req, res) => {
    const data = req.body
    return res.json(data)
}

exports.listAllTasks = (req, res) => {
    return res.json ({msg: 'Lista todas as tarefas'})
}

exports.detailsTask = (req, res) => {
    const id = req.params.id
    return res.json ({msg: `Retornando dados da tarefa ${id}`})
}

exports.deleteTask = (req, res) => {
    const id = req.params.id
    return res.json ({msg: `Excluindo tarefa ${id}`})
}

exports.updateTaskStatus = (req, res) => {
    const id = req.params.id
        return res.json ({msg: `Atualizando dados da tarefa ${id}`})
}

