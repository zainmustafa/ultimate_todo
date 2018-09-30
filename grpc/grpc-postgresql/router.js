var express = require('express')
var router = express.Router()
var grpcClient = require('./client')

//router.get('/tasks', grpcClient.list)
// router.get('/tasks/:Todoid', grpcClient.get)   
 router.delete('/tasks/delete/:Todoid', grpcClient.deleteTodo)
// router.post('/tasks/add', grpcClient.addTodo)
// router.put('/tasks/edit/:Todoid', grpcClient.updateTodo)

module.exports = router   