const request = require('request'),
    expect = require('chai').expect;

describe('ToDo Lists Of Tasks', () => {

    describe('I: GET All The Tasks', () => {

        it('Should Get All The Tasks', (done) => {
            request.get('http://localhost:3000/todo/api/v1.0/tasks', (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });
});