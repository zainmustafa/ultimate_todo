const request = require('request'),
    expect = require('chai').expect;

describe('ToDo Lists Of Tasks', () => {

    describe('I: GET All The Tasks', () => {
        //  Todo's Tasks Getting  
        it('Should Get All The Tasks', (done) => {
            request.get('http://localhost:3000/todo/api/v1.0/tasks', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        //  Todo's Single Task Getting 
        describe('II: GET Single Task', () => {

            it('Should Get Single Task', (done) => {
                request.get('http://localhost:3000/todo/api/v1.0/tasks/5b9f7304d25d002798badfa0', (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
            });
        });
        //  Todo's Task Posting 
        describe('III: POST A Task', () => {

            it('Should Post A Task', (done) => {
    
                request.post({
                    url: 'http://localhost:3000/todo/api/v1.0/tasks',
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
    });
});