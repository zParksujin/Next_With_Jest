// const { fetchDataSuccess, fetchDataFailure } = require("../utils/api");
import { fetchDataFailure, fetchDataSuccess } from "../utils/api";

test("the data is peanut butter", () => {
  function callback(data) {
    expect(data).toBe("peanut butter");
  }

  fetchDataSuccess(callback);
});

// test("the data is peanut butter", (done) => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut butter");
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchDataSuccess(callback);
// });

test("the data is peanut butter", () => {
  return fetchDataSuccess().then((data) => {
    expect(data).toBe("peanut butter");
  });
});

test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchDataFailure().catch((e) => expect(e).toMatch("error"));
});

test("the data is peanut butter", () => {
  return expect(fetchDataSuccess()).resolves.toBe("peanut butter");
});

test("the fetch fails with an error", () => {
  return expect(fetchDataFailure()).rejects.toMatch("error");
});

test("the data is peanut butter", async () => {
  const data = await fetchDataSuccess();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchDataFailure();
  } catch (e) {
    expect(e).toMatch("error");
  }
});
