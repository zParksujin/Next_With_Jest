import axios from "axios";

export const fetchDataSuccess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
      // reject('error')
    }, 200);
  });
};

export const fetchDataFailure = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("peanut butter");
      reject("error");
    }, 200);
  });
};

// users.js

class Users {
  static all() {
    return axios.get("/users.json").then((res) => {
      return res.data;
    });
  }
}

export default Users;
