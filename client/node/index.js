const grpc = require('grpc');

const protoPath = require('path').join(__dirname, '../..', 'proto');
//console.log("proto path : ", protoPath)	
const proto = grpc.load({root: protoPath, file: 'employees.proto'});

//Create a new client instance that binds to the IP and port of the grpc server.
const client = new proto.employees.EmployeesService('localhost:50050', grpc.credentials.createInsecure());


/* function todoList(req,response){
client.List({}, (error, response) => {
	if (!error) {
		console.log("Response1 : ", response)
		res.send(response)
	}
	else {
		console.log("Error1:", error.message);
	}
});
} */

function todoList(req, res) {
    client.List({}, function (err, todos) {
		res.send(todos)
		console.log(todos)
    });
}


client.get({
	Todoid: 1
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response 2 : ", response)
	}
	else {
		console.log("Error 2:", error.message);
	}
});

client.delete({
	Todoid: 764474
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response 3: ", response)
	}
	else {
		console.log("Error 3:", error.message);
	}
});

client.Insert({
	Todoid: parseInt(Math.random() * 1000000),
	title: "Hello JEE",
	description: "kese Ho"
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response  4: ", response)
	}
	else {
		console.log("Error 4:", error.message);
	}
});




client.update({
	Todoid: 1,
	title: "Bhaiya Update Ho gaya",
	description: "ha bhai sach mai ho gaya"
}, (error, response) => {
	if (
		!error
	) {
		console.log("Response  5: ", response)
	}
	else {
		console.log("Error 5:", error.message);
	}
});

module.exports = {
    todoList
}