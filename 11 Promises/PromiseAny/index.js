Promise.myAny = function (promises) {
  return new Promise((res, rej) => {
    let errors = [];
    let count = 0;
    promises.map((p) => {
      Promise.resolve(p)
        .then((val) => res(val))
        .catch((err) => {
          errors.push(err);
          count += 1;
          if (count === promises.length) {
            rej({errors: errors});
          }
        });
    });
  });
};


Promise.myAny([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ещё одна ошибка!")), 2000))
]).catch(error => {
  console.log(error.constructor.name); // AggregateError
  console.log(error.errors[0]); // Error: Ошибка!
  console.log(error.errors[1]); // Error: Ещё одна ошибка!
});