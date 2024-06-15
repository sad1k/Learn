// Добавьте toString в словарь
// важность: 5
// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

// Вот так это должно работать:

let dictionary = Object.create(null);

// ваш код, который добавляет метод dictionary.toString
Object.defineProperty(dictionary, 'toString', {
  value: function(){ return Object.keys(this).join(',')},
  enumerable:false,
  writable:true,
  configurable:true
})

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

console.log(dictionary.toString())


// Разница между вызовами
// важность: 5
// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // вызывает с this = rabbit
Rabbit.prototype.sayHi(); // вызывается с this = prototype
Object.getPrototypeOf(rabbit).sayHi(); // с this = prototype
rabbit.__proto__.sayHi(); // this = rabbit ошибка тут  undefined потому что this = prototype




