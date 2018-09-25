var express = require('express')
var router = express.Router()
var grpcClient = require('../client/node/index')

router.get('/tasks', grpcClient.todoList)
router.get('/tasks/:Todoid', grpcClient.getTodo)   
router.delete('/tasks/delete/:Todoid', grpcClient.deleteTodo)
router.post('/tasks/add', grpcClient.addTodo)


module.exports = router   