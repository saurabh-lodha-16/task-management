import { randomString } from './randomString';
import { addUser, listUsers } from '../services/userServices';
import { addTask } from '../services/taskServices';

export async function generateTestUser() {
  let test_user = {
    user_name: randomString(5)
  }
  let user_data = await addUser(test_user);
  const data = {
    title: 'Book Event',
    description: 'Book event for football',
    user_id: user_data.data
  }
  let task_data = await addTask(data);
  return user_data;
}

export async function getUserId() {
  let test_user = {
    user_name: randomString(5)
  }
  let user_data = await addUser(test_user);
  return user_data.data;
}