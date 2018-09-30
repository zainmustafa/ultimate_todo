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
insertData: function(call, callback) {
       database.query('INSERT INTO grpc_sql (task, description) VALUES ($1, $2)', [call.request.task, call.request.description], (err) => {
            if (err) throw err;
            console.log("Data are Inserted");
       })
 },

getData: function(_, callback) {
    database.query('SELECT * FROM grpc_sql', (err, res) => {
       if (err) throw err;
        console.log("All data: ")
        console.log(res.rows);
    })

},

getOne: function(call, callback) {

    database.query('SELECT * FROM grpc_sql WHERE id = $1',[call.request.id], (err, res) => {
                if (err) throw err;
                 console.log("Requested Task given below: ")
                 console.log(res.rows);
    })
     },

delete: function(call, callback) {
    database.query('DELETE FROM grpc_sql WHERE id = $1', [call.request.id], (err) => {
        if (err) throw err;
         console.log("deleted succesfully");
        })
   },
 
 });


 
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();

