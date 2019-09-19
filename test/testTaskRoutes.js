const request = require('supertest');
const app = require('../app');

describe('GET /tasks', function () {
  it('respond with json containing a list of all tasks', function (done) {
    request(app)
      .get('/tasks')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /tasks', function () {
  let data = {
    title: 'Book Event',
    description: 'Book event for football',
    user_id: 'cd1eac6a-3637-4fe5-8722-f7c5fddbf00d',
  }
  it('respond with 200 created', function (done) {
    request(app)
      .post('/tasks')
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

describe('POST /tasks', function () {
  let data = {}
  it('respond with 500 not created', function (done) {
    request(app)
      .post('/tasks')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .expect('{"message":"User id shouldn\'t be null."}')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe('PUT /tasks', function () {
  const data = {
    title: 'Book Hall',
    description: 'Book event for football',
  }
  let taskId = '90491fbd-ba8f-45bb-b591-231445f0900d'
  it('respond with 200 updated', function (done) {
    request(app)
      .put(`/tasks/${taskId}`)
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

describe('PUT /tasks', function () {
  const data = {}
  let taskId = '90491fbd-ba8f-45bb-b591-231445f0900d'
  it('respond with 500 error', function (done) {
    request(app)
      .put(`/tasks/${taskId}`)
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});


describe('DELETE /tasks', function () {
  let taskId = '90491fbd-ba8f-45bb-b591-231445f0900d'
  it('respond with 200 task deleted', function (done) {
    request(app)
      .delete(`/tasks/${taskId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});


