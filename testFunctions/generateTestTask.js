import { randomString } from './randomString';
import { getUserId } from '../testFunctions/generateTestUser';
import { getAllTasks } from '../services/taskServices';

export async function getTaskId() {
  let user_id = await getUserId();
  const tasks = await getAllTasks(user_id);
  return tasks.data[0].id;
}