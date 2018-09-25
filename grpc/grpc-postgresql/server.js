const grpc = require('grpc');
const proto = grpc.load('sql.proto');
const server = new grpc.Server();
const { Client } = require('pg')

const connection = 'postgres://lnjwjwwg:LVt6Fs1rhZRrm4FSxaM0TQ4x33DKeJ0e@elmer.db.elephantsql.com:5432/lnjwjwwg'
const database = new Client({
    connectionString: connection,
})
database.connect((err) => {
    if (err) throw err;
    console.log('connected')

})

server.addService(proto.proto.TodoService.service, {

  

 insert: function(call, callback) {
       
       database.query('INSERT INTO ultimate_todo (todo, description) VALUES ($1, $2)', [call.request.todo, call.request.description], (err) => {
            if (err) throw err;
            console.log("Data are Inserted");
       })
 },

 });
 
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
