Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"))
  .then(() => console.log("Promise 3"));

console.log("Outside Promise");
