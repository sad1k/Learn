Promise.myAll = function (promises) {
  return new Promise((resolve) => {
    let results = [];
    let count = 0;

    promises.map((p, index) => {
      Promise.resolve(p).then((val) => {
        results[index] = val;
        count += 1;
        if (count === promises.length) {
          resolve(results);
        }
      });
    });
  });
};

Promise.myAll([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log); // когда все промисы выполнятся, результат будет 1,2,3
// каждый промис даёт элемент массива


