// Изменяем "prototype"
// важность: 5
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit(); //true экземпляры объекта запоминают прототип который был до создания

Rabbit.prototype = {};

console.log(rabbit.eats); // true
// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit.eats); // false изменили в объекте значение так как на объект ссылка то и в rabbit тоже изменилось
// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats;

console.log(rabbit.eats); // undefined. Ошибка ! delete применяется к свойствам конкретного объекта rabbit, но там нет eats => не происходит удаление из прототипа
// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); // undefined

// Создайте новый объект с помощью уже существующего
// важность: 5
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

function Func() {
  this.title = "123";
}

let obj = new Func();

let obj2 = new obj.constructor();
console.log(obj2);
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает.
// И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function Func() {
  this.title = "123";
}

Func.prototype = {};

let obj = new Func();

let obj2 = new obj.constructor();
console.log(obj2);

// Создайте конструктор функции Person, который принимает имя и возраст в качестве параметров. Добавьте метод introduce к прототипу Person, который выводит сообщение с именем и возрастом человека.

// Затем создайте конструктор функции Student, который наследует от Person. Этот конструктор должен также принимать параметр grade (класс/курс)
// и добавлять его в объект.
// Добавьте метод study к прототипу Student, который выводит сообщение о том, что студент учится.

// Задание:

// Определите конструктор Person и добавьте метод introduce к его прототипу.
// Определите конструктор Student, который наследует от Person, и добавьте метод study к его прототипу.
// Создайте экземпляр Student и вызовите оба метода (introduce и study).

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function introduce() {
  console.log(this.name, this.age);
};

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}
Student.prototype.study = function study() {
  console.log(`Student is studying in grade ${this.grade}`);
};
Object.setPrototypeOf(Student.prototype, Person.prototype);

let stud = new Student("saha", 10, 4);
stud.study();
stud.introduce();

// Задача 2: Переопределение методов прототипа
// Создайте конструктор функции Animal, который принимает параметр name и имеет метод speak, который выводит сообщение "Animal makes a sound".

// Затем создайте конструктор функции Dog, который наследует от Animal. Переопределите метод speak в Dog, чтобы он выводил сообщение "Dog barks".

// Задание:

// Определите конструктор Animal и добавьте метод speak к его прототипу.
// Определите конструктор Dog, который наследует от Animal, и переопределите метод speak в его прототипе.
// Создайте экземпляр Dog и вызовите метод speak.

function Animal() {}

Animal.prototype.speak = function () {
  console.log("Animal makes a sound");
};

function Dog(name) {
  this.name = name;
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

Dog.prototype.speak = function () {
  console.log("Dog barks");
};

let dog = new Dog();

dog.speak();

Array.prototype.myReduce = function (callback, initialValue) {
  let acc;
  if (initialValue !== undefined) {
    acc = initialValue;
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
  }else{
    acc = this?.[0];
    for (let i = 1; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc
};

let arr = [1, 2, 3, 4, 5]
console.log(arr.MyReduce((a, b) => a + b, 0))

Function.prototype.myBind = function(bindThis, ...bindArgs){
  return () => {
    let res
    if(bindArgs.length > 0){
      res = this.apply(bindThis, bindArgs)
    }else{
      res = this.apply(bindThis)
    }
    return res
  }
}

let obj = {
  name:'123'
}

let obj1 = {
  name:'1234'
}

let getName = function(){
  console.log(this.name)
}

let bindedFunc = getName.myBind(obj)
bindedFunc()
bindedFunc = bindedFunc.myBind(obj1)
bindedFunc()


let func = () => console.log(this.name)
