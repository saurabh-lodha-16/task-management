const assert = require('chai').assert;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const should = require('chai').should()
import { addUser, updateUser, listUsers } from "../services/userServices";
import { generateTestUser } from '../testFunctions/generateTestUser';
let user_data = generateTestUser();

describe('Test if User is created successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(addUser(), 'Improper Arguments');
  });

  it("If user_name is provided, user should be created", function () {
    const data = {
      user_name: 'test'
    }
    assert(addUser(data), 'user is not created successfully');
  });

  it("Data should include user_name property", function () {
    const data = {
      user_name: 'test'
    }
    data.should.have.property('user_name');
    assert(addUser(data), 'user is not created successfully');
  });

});

describe('Test if user details are updated successfully', function () {
  it("If arguments are null, it should return error", async function () {
    assert(updateUser(), 'Improper Arguments');
  });

  it("If user_id and user_name is provided, user record should be updated", function () {
    const data = {
      user_name: 'test',
      user_id: user_data.data
    }
    assert(updateUser(data), 'user records not updated');
  });

  it("Data should include user_id property", function () {
    const data = {
      user_id: user_data.data
    }
    data.should.have.property('user_id');
    assert(updateUser(data), 'user record is not updated successfully');
  });

});


describe('Test if Users are retrived successfully', function () {
  it("The returned users output should be an array", async function () {
    let response = await listUsers();
    assert.isArray(response.data, 'Invalid Data Format');
  });

  it("The returned users output should contain data attribute", async function () {
    let response = await listUsers();
    response.should.have.property('data');
  });


});
