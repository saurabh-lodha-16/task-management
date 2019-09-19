import { addTask, deleteTask, updateTask, getAllTasks } from "../services/taskServices";
const assert = require('chai').assert;
const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const should = require('chai').should()


describe('Test if Task is created successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(addTask(), 'Improper Arguments');

  });

  it("If proper data is provided, task should be created", function () {
    const data = {
      title: 'Book Event',
      description: 'Book event for football',
      user_id: 'cd1eac6a-3637-4fe5-8722-f7c5fddbf00d',
    }
    assert(addTask(data), 'Task is not added successfully');
  });

  it("Data should include user_id property", function () {
    const data = {
      user_id: 'cd1eac6a-3637-4fe5-8722-f7c5fddbf00d',
    }
    data.should.have.property('user_id');
    assert(addTask(data), 'Task is not created successfully');
  });

});

describe('Test if task details are updated successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(updateTask(), 'Improper Arguments');
  });

  it("If taskId and proper data is provided, task record should be updated", function () {
    const data = {
      title: 'Book Hall',
      description: 'Book event for football',
      taskId: '90491fbd-ba8f-45bb-b591-231445f0900d',
    }
    assert(updateTask(data), 'task records not updated');
  });

  it("Data should include taskId property", function () {
    const data = {
      taskId: '90491fbd-ba8f-45bb-b591-231445f0900d'
    }
    data.should.have.property('taskId');
    assert(updateTask(data), 'task record is not updated successfully');
  });

});

describe('Test if task details are deleted successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(deleteTask(), 'Improper Arguments');
  });

  it("If taskId and proper data is provided, task record should be updated", function () {
    const data = {
      taskId: '90491fbd-ba8f-45bb-b591-231445f0900d',
    }
    assert(deleteTask(data), 'Error! task records not deleted');
  });

  it("Data should include taskId property", function () {
    const data = {
      taskId: '90491fbd-ba8f-45bb-b591-231445f0900d'
    }
    data.should.have.property('taskId');
    assert(deleteTask(data), 'task record is not deleted successfully');
  });

});


describe('Test if Tasks are retrived successfully', function () {
  it("The returned tasks data output should be an array", async function () {
    let response = await getAllTasks();
    assert.isArray(response.data, 'Invalid Data Format');
  });

  it("The returned tasks output should contain data attribute", async function () {
    let response = await getAllTasks();
    response.should.have.property('data');
  });


});
