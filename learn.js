var a = 1;

function first() {
  var a = 2;
  function second() {
    a++;
    var a = 3;
    console.log(a);
  }
}

const func = (function ({ a = 10 }) {
  delete a;
  return a;
})({ a: 5 });

console.log(func);

