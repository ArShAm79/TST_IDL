const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve();
  }, 1000);
});

promise1.then(() => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise 2 executed");
      resolve();
    }, 500);
  });

  promise2
    .then(() => {
      console.log("Promise 2 chain executed 1");
    })
    .then(() => console.log("Promise 2 chain executed 2"))
    .then(() => console.log("Promise 2 chain executed 3"));
});

console.log("Outside Promise");
