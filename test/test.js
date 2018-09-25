const request = require('request'),
    expect = require('chai').expect;

describe('ToDo Lists Of Tasks', () => {

    describe('I: GET All The Tasks', () => {
        //  Getting all The Tasks
        it('Should Get All The Tasks', (done) => {
            request.get('http://localhost:3000/todo/api/v1.0/tasks/', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
        //  Getting A Single Task
        describe('II: GET Single Task', () => {

            it('Should Get Single Task', (done) => {
                request.get('http://localhost:3000/todo/api/v1.0/tasks/396510', (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        });
         //  Posting a Task
        describe('III: POST A Task', () => {

            it('Should Post A Task', (done) => {
    
                request.post({
                    url: 'http://localhost:3000/todo/api/v1.0/tasks/add',
                    json: {
                        title: "task",
                        description: "wanna go somewhere",
                    }
                }, (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        });
        // Updating a Task 
        describe('IV: UPDATE A Task', () => {
            it('Should Update A Task', (done) => {
                request.put({
                    url: 'http://localhost:3000/todo/api/v1.0/tasks/edit/911513',
                    json: {
                        title: "task",
                        description: "wanna go somewhere",
                        done: false
                    }
                }, (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        });
            // Deleting a Task
        describe('V: DELETE A Task', () => {
            it('Should Delete A Task', (done) => {
                request.delete('http://localhost:2000/todo/api/v1.0/tasks/delete/713721', (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        }); 
});