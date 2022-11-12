var promise = new Promise(function (resolve, reject) {
  const x = "hasnain";
  const y = "hasnain";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are hasnain");
  })
  .catch(function () {
    console.log("there is some issue");
  });
