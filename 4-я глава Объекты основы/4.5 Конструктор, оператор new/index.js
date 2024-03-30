// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

let obj = {
}

function A() { 
    return obj
 }
function B() { 
    return obj  
}

let a = new A();
let b = new B();


// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator(){
    this.read = () => {
        this.a = +prompt('1', '')
        this.b = +prompt('2', '')
    }
    this.sum = () =>{
        return this.a + this.b
    } 
    this.mul = () => {
        return this.a * this.b
    }
}


// Создайте new Accumulator
// важность: 5
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue){
    this.value = startingValue
    this.read = () =>{
        let num = +prompt('num', '')
        this.value += num
    }
}


// Constructor, "new" Operator:
// Basic Constructor Creation:
// Write a constructor function named Person that takes parameters name and age, and sets them as properties of the object created.
// Create an instance of Person using the new operator and assign it to a variable named person1. Provide a name and age for the person.
// Prototype Methods:
// Add a method sayHello() to the Person constructor which logs "Hello, my name is [name] and I am [age] years old!".
// Call the sayHello() method on the person1 instance.

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log(`Hello my name is ${this.name}`)
    }
}

const person1 = new Person('Victor', 54)
person1.sayHello()
console.log(person1)
