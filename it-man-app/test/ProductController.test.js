const request = require('supertest');
const assert = require('assert');

describe('ProductController', function() {
  let createdProductId;

  describe('#create()', function() {
    it('should create a new product', function(done) {
      request(sails.hooks.http.app)
        .post('/product')
        .send({
          name: 'Test Product',
          description: 'This is a test product',
          price: 10.99
        })
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.ok(res.body.id);
          createdProductId = res.body.id;
          assert.strictEqual(res.body.name, 'Test Product');
          assert.strictEqual(res.body.description, 'This is a test product');
          assert.strictEqual(res.body.price, 10.99);
          done();
        });
    });
  });

  describe('#find()', function() {
    it('should list all products', function(done) {
      request(sails.hooks.http.app)
        .get('/product')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.ok(Array.isArray(res.body));
          done();
        });
    });
  });

  describe('#findOne()', function() {
    it('should find one product by id', function(done) {
      request(sails.hooks.http.app)
        .get(`/product/${createdProductId}`)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.strictEqual(res.body.id, createdProductId);
          assert.strictEqual(res.body.name, 'Test Product');
          done();
        });
    });

    it('should return 404 for a non-existing product', function(done) {
      request(sails.hooks.http.app)
        .get('/product/999999')
        .expect(404)
        .end(done);
    });
  });

  describe('#update()', function() {
    it('should update a product', function(done) {
      request(sails.hooks.http.app)
        .put(`/product/${createdProductId}`)
        .send({
          name: 'Updated Product',
          description: 'This is an updated test product',
          price: 20.99
        })
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.strictEqual(res.body.id, createdProductId);
          assert.strictEqual(res.body.name, 'Updated Product');
          assert.strictEqual(res.body.description, 'This is an updated test product');
          assert.strictEqual(res.body.price, 20.99);
          done();
        });
    });

    it('should return 404 for updating a non-existing product', function(done) {
      request(sails.hooks.http.app)
        .put('/product/999999')
        .send({
          name: 'Non-existing Product',
          description: 'This product does not exist',
          price: 30.99
        })
        .expect(404)
        .end(done);
    });
  });

  describe('#delete()', function() {
    it('should delete a product', function(done) {
      request(sails.hooks.http.app)
        .delete(`/product/${createdProductId}`)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          assert.strictEqual(res.body.id, createdProductId);
          done();
        });
    });

    it('should return 404 for deleting a non-existing product', function(done) {
      request(sails.hooks.http.app)
        .delete('/product/999999')
        .expect(404)
        .end(done);
    });
  });
});
