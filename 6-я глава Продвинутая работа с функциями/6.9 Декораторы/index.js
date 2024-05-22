function spy(func) {
  wrapper.calls = [];
  function wrapper() {
    wrapper.calls.push(Array.from(arguments));
    let res = func.apply(this, arguments);
    return res;
  }

  return wrapper;
}

function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function f(x) {
  console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

function debounce(f, ms) {
  let timerId = null;
  let prevArgs = null;
  return function () {
    if (timerId) {
      prevArgs = arguments;
      return;
    }
    prevArgs = arguments;
    timerid = setTimeout(() => {
      f.apply(this, prevArgs);
      clearTimeout(timerId);
      timerId = null;
      prevArgs = null;
    }, ms);
  };
}

let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

function throttle(f, ms) {
  let prevArgs = null;
  let timerId = null;
  let wait = false;
  function inner() {
    if (!wait) {
      wait = true;
      f.apply(this, arguments);
      setTimeout(() => {
        wait = false;
        if (prevArgs) {
          f.apply(this, prevArgs);
        }
      }, ms);
    } else {
      prevArgs = arguments;
    }
  }
  return inner;
}
function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
