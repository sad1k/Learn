// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

function f(a, b) {
  console.log(a + b);
}

function defer(ms) {
  setTimeout(this, ms);
}

Function.prototype.defer = defer;

f.defer(1000);




function f(a, b) {
  console.log(a + b);
}

function defer(ms) {
  let func = this
  return (a, b) =>  {
    setTimeout(() => func(a, b), ms);
  };
}

Function.prototype.defer = defer;

f.defer(1000)(1, 2);


