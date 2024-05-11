function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit.eats);

class Human {
  walk() {
    console.log("walk!");
  }
}

class Man extends Human {
  constructor(props) {}

  hello() {
    console.log("hello");
  }

  static bye() {
    console.log("bye");
  }
}

console.dir(Human.__proto__ === Function.prototype);

if (!Object.setPrototypeOf) {
  Object.prototype.setPrototypeOf = function (obj, proto) {
    if (obj.__proto__) {
      obj.__proto__ = proto;
      return obj;
    } else {
      // Если нужно будет определить прототип у Object.create(null) объекта
      var Fn = function () {
        for (var key in obj) {
          //Если в объект уже были определены некоторые свойства
          Object.defineProperty(this, key, {
            value: obj[key],
          });
        }
      };
      Fn.prototype = proto;
      return new Fn();
    }
  };
}

function Man(name, age) {
  this.name = name;
  this.age = age;
}
Man.prototype.hello = function () {
  return `Hi ${this.name}!`;
};
const lena = new Man("lena", 10);
Man.prototype = {};
Man.prototype.hello = function () {
  return `Hello ${this.name}!`;
};
const victor = new Man("victor", 10);
console.log(lena.hello(), victor.hello());
