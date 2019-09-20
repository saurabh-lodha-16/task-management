const request = require('supertest');
const app = require('../app');
import { randomString } from '../testFunctions/randomString';
import { getUserId } from '../testFunctions/generateTestUser';

describe('Get Users', function () {
  it('respond with json containing a list of all users', function (done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('Add User', function () {
  let data = {
    user_name: randomString(10),
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

describe('Add User', function () {
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

describe('Update user', async function () {
  let data = {
    user_name: 'Test Update',
  }

  let id = await getUserId();
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