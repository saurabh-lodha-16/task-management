const request = require('supertest');
const app = require('../app');

describe('GET /users', function () {
  it('respond with json containing a list of all users', function (done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users', function () {
  let data = {
    user_name: 'dummy',
  }
  it('respond with User Created Successfully', function (done) {
    request(app)
      .post('/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /users', function () {
  let data = {}
  it('respond with 500 not created', function (done) {
    request(app)
      .post('/users')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect('{"message":"User Name is empty."}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('PUT /users', function () {
  let data = {
    user_name: 'Test Update',
  }
  let id = 'e6535f6d-e9bc-488b-804b-018c4d87c37c';
  it('respond with 200 and User Record updated', function (done) {
    request(app)
      .put(`/users/${id}`)
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});