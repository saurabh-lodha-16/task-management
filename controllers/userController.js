import { addUser, updateUser, listUsers } from "../services/userServices";

export async function add(req, res) {
  try {
    const response = await addUser(req.body);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function update(req, res) {
  try {
    const user = {
      user_name: req.body.user_name,
      user_id: req.params.id
    };
    const response = await updateUser(user);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export async function list(req, res) {
  try {
    const response = await listUsers();
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
