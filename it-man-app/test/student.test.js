const request = require('supertest');
const assert = require('assert');
const sails = require('sails');

describe('Student CRUD', function () {
    it('should create a student', function (done) {
    request(sails.hooks.http.app)
        .post('/student/create')
        .send({ name: 'John Doe', age: 21, email: 'john.doe@example.com' })
        .expect(200)
        .end(function (err, res) {
            if (err) return done(err);
            assert(res.body.name === 'John Doe');
            assert(res.body.age === 21);
            assert(res.body.email === 'john.doe@example.com');
            done();
        });
    });

  // Adicione testes para leitura, atualização e exclusão...
});
