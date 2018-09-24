const grpc = require('grpc');
global.Mongoose = require('mongoose');
Mongoose.connect('mongodb://saad:saad1234@ds113443.mlab.com:13443/grpc-node-api');

const proto = grpc.load('proto/employees.proto');
const server = new grpc.Server();
const employeeServices = require('../db/employees')

//define the callable methods that correspond to the methods defined in the protofile
server.addService(proto.employees.EmployeesService.service, {

	List(call, callback){
		employeeServices.list(callback);
	},

	get(call, callback){
		let payload = {
			criteria: {
				Todoid: call.request.Todoid
			},
			projections: {
				_id : 0, __v : 0
			},
			options: {
				lean: true
			}
		};
		let emp = new employeeServices(payload);
		emp.fetch(callback);
	},

	Insert(call, callback){
		let emp = new employeeServices({
			Todoid: call.request.Todoid,
			title: call.request.title,
			description: call.request.description,
		});
		emp.add(callback);
	},


	update(call, callback) {
        var payload = {
            condition: {
				Todoid: call.request.Todoid,
            },
            update: {
				Todoid: call.request.Todoid,
                title: call.request.title,
                description: call.request.description,
            }
        };
        var t = new employeeServices(payload);
        t.update(callback);
  
    },









/* 	remove(call, callback){
		const criteria = {
			Todoid: call.request.Todoid,
		};
		let emp = new employeeServices(criteria);
		emp.remove(criteria, callback);
	}, */
	delete(call, callback) {
        var payload = {
            condition: {
				Todoid: call.request.Todoid,
            }
        };
        var t = new employeeServices(payload);
		t.delete(callback);
	}
});

//Specify the IP and and port to start the grpc Server, no SSL in test environment
server.bind('0.0.0.0:50050', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:50050');
