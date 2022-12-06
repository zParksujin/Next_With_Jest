import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

export const selectUser = (userId) =>
  axios.get(`${API_ENDPOINT}/users/${userId}`).then((res) => res.data);

test("findOne returns a user", async () => {
  const user = await selectUser(1);
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Leanne Graham");
});
