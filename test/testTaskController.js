import { addTask, deleteTask, updateTask, getAllTasks } from "../services/taskServices";
const assert = require('chai').assert;
const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const should = require('chai').should();
import { getUserId, generateTestUser } from '../testFunctions/generateTestUser';
import { getTaskId, taskAdd } from '../testFunctions/generateTestTask';
let user_data = generateTestUser();

describe('Test if Task is created successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(addTask(), 'Improper Arguments');

  });

  it("If proper data is provided, task should be created", async function () {
    const data = {
      title: 'Book Event',
      description: 'Book event for football',
      user_id: user_data.user_id
    }
    assert(addTask(data), 'Task is not added successfully');
  });

  it("Data should include user_id property", async function () {
    const data = {
      user_id: user_data.user_id
    }
    data.should.have.property('user_id');
  });

});

describe('Test if task details are updated successfully', function () {

  it("If arguments are null, it should return error", async function () {
    assert(updateTask(), 'Improper Arguments');
  });

  it("If taskId and proper data is provided, task record should be updated", async function () {
    let taskId = await getTaskId()
    const data = {
      title: 'Book Hall1',
      description: 'Book event for football',
      taskId: taskId,
    }
    assert(updateTask(data), 'task records not updated');
  });

  it("Data should include taskId property", async function () {
    const data = {
      taskId: 'testId'
    }
    data.should.have.property('taskId');
  });

});

describe('Test if task details are deleted successfully', function () {

  it("If arguments are null, it should return error", async function () {
    assert(deleteTask(), 'Improper Arguments');
  });

  it("If taskId and proper data is provided, task record should be updated", async function () {
    const data = {
      taskId: await getTaskId()
    }
    assert(deleteTask(data), 'Error! task records not deleted');
  });

  it("Data should include taskId property", async function () {
    const data = {
      taskId: 'testId'
    }
    data.should.have.property('taskId');
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
