import { randomString } from './randomString';
import { getUserId } from '../testFunctions/generateTestUser';
import { getAllTasks, addTask } from '../services/taskServices';

export async function getTaskId() {
  let user_id = await getUserId();
  const data = {
    title: 'Book Event',
    description: 'Book event for football',
    user_id: user_id
  }
  const response = await addTask(data);
  const tasks = await getAllTasks(user_id);
  const store = tasks.data[0];
  return store.id;
}