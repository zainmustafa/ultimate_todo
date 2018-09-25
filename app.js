/* const PROTO_PATH = __dirname + '../../protos/todo.proto';
const grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH, {
        keepCase: true, enums: String, defaults: true, arrays: true, objects: true, oneofs: true
    });
var todoproto = grpc.loadPackageDefinition(packageDefinition).todoproto;
// The protoDescriptor object has the full package hierarchy

var client = new todoproto.TodoService('0.0.0.0:50051', grpc.credentials.createInsecure()); */
const grpc = require('grpc');

const protoPath = require('path').join(__dirname, './', 'proto');
//console.log("proto path : ", protoPath)	
const proto = grpc.load({root: protoPath, file: 'employees.proto'});

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.employees.EmployeesService('localhost:50050', grpc.credentials.createInsecure());

/* initiate express app */
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
// parse application/json
app.use(bodyParser.json())

/* initiate router */   
var TodoRouter = require('./router/router')


app.use('/todo/api/v1.0', TodoRouter)

app.listen(3000, () => {
    console.log("server starts port 2000")
})




