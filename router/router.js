var express = require('express')
var router = express.Router()
var grpcClient = require('../client/node/index')

router.get('/tasks', grpcClient.todoList)


module.exports = router   