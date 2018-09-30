const PROTO_PATH = __dirname + '/sql.proto';
const grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(
    PROTO_PATH, { keepCase: true, enums: String, defaults: true });
var todoproto = grpc.loadPackageDefinition(packageDefinition).proto;
// The protoDescriptor object has the full package hierarchy

var client = new todoproto.TodoService('0.0.0.0:50051', grpc.credentials.createInsecure());
console.log("done")
function printResponse(error, response) {
    if (error)
        console.log('Error: ', error);
    else
        console.log('response',response);
}



function insertTodo( task, description) {
    var todo = {
        task: task,
        description: description
    };
    client.insertData(todo, function (error, empty) {
        console.log("SUCCESSFULLY");
        printResponse(error, empty);
    });
}
function getAll() {
    client.getData({}, function (error, get) {
         printResponse(error, get);
      });
      }



var processName = process.argv.shift();
var scriptName = process.argv.shift();
var command = process.argv.shift();


if (command == 'add')
    insertTodo(process.argv[0], process.argv[1], process.argv[2]);
else if (command == 'getData')
    getAll();


