import { randomString } from './randomString';
import { addUser, listUsers } from '../services/userServices';

export async function generateTestUser() {
  let test_user = {
    user_name: randomString(5)
  }
  let user_data = await addUser(test_user);
  return user_data;
}

export async function getUserId() {
  const users = await listUsers();
  const dummy = users.data[0];
  return dummy.id;
}