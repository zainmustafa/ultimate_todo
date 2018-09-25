const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
//console.log("proto path : ", protoPath)	
const proto = grpc.load({root: protoPath, file: 'employees.proto'});

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.employees.EmployeesService('localhost:50050', grpc.credentials.createInsecure());



function todoList(req, res) {
    client.List({}, function (err, todos) {
		res.send(todos)
    });
}


function getTodo(req, res) {
    client.get({
        Todoid: parseInt(req.params.Todoid)
    }, function (err, todo) {
        res.send(todo)
    });
}

function deleteTodo(req, res) {
	client.delete({
	 Todoid: parseInt(req.params.Todoid)
	}, (error, response) => {
		if (!error) {
			res.send({ status: success })
		}
		else {
			console.log("Status Failed But Your Data Could Be Deleted Check Todo")
		}
	})
}


function addTodo(req, res){
client.Insert({
	Todoid: parseInt(Math.random() * 1000000),
	title: req.body.title,
	description: req.body.description
}, (error, response) => {
	if (
		!error
	) {
		res.send({ status: success })
	}
	else {
		
		console.log("Status Failed But Your Data Could Be Inserted check All Todos")

	}
});

}

function updateTodo(req,res){

client.update({
	Todoid: parseInt(req.params.Todoid),
	title: req.body.title,
	description: req.body.description
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response  5: ", response)
	}
	else {
		console.log("Status Failed But Your Data Could Be Updated check All Todos")
	}
});
}

module.exports = {
	todoList,
	getTodo,
	deleteTodo,
	addTodo,
 	updateTodo


}