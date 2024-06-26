// Учитывает ли функция последние изменения?
// важность: 5
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
// Такие ситуации встречаются как при разработке для браузера, так и для сервера. Функция может быть назначена на выполнение позже, чем она была создана, например, после действия пользователя или сетевого запроса.

// Итак, вопрос: учитывает ли она последние изменения?

// Да, мы изменяем внешнюю переменную которую ищет функция sayHi и соответственно выведет Pete

// Какие переменные доступны?
// важность: 5
// Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.



// Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?
Какое значение будет показано? «Pete» или «John»?

// функция берет значение из места создания "Pete"


// Независимы ли счётчики?
// важность: 5
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 1
alert( counter2() ); // 2

// Каждый makeCounter создает собственное окружение и ссылается собственный count поэтому они независимы


// Объект счётчика
// важность: 5
// Здесь объект счётчика создан с помощью функции-конструктора.

// Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1


// да работать будет, покажет вот это

// Сумма с помощью замыканий
// важность: 4
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

// Например:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(a){
    let sum = a 
    return function(b){
        return sum + b
    }
}

console.log(sum(1)(2))


// Видна ли переменная?
// важность: 4
// Что выведет данный код?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// P.S. В этой задаче есть подвох. Решение не очевидно.

// В этой задаче let x = 2 получается что в данном лексическом окружении имеется x 
// в данном блоке кода x будет uninitialized так как x объявляется после обращения



// Функция внутри if
// важность: 5
// Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); -> нету в данном блоке кода 

// Hello John

// Правильный ответ: Ошибка


// Фильтрация с помощью функции
// важность: 5
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// /* .. ваш код для inBetween и inArray */


console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
// Открыть песочницу с тестами для задачи.

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b){
    return (el) => el <= b && el >= a 
}

function inArray(arr){
    return (el) => arr.includes(el)
}


console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// Сортировать по полю
// важность: 5
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//   { name: "Иван", age: 20, surname: "Иванов" },
//   { name: "Пётр", age: 18, surname: "Петров" },
//   { name: "Анна", age: 19, surname: "Каренина" }
// ];
// Обычный способ был бы таким:

// // по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, например вот таким?

// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.


function byField(fieldName){
    return (obj1, obj2) => obj1[fieldName] > obj2[fieldName] ? 1 : -1
}

// Армия функций
// важность: 5
// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // функция shooter
      alert( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.
// Почему у всех стрелков одинаковые номера?

// Почините код, чтобы он работал как задумано.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i
    let shooter = function() { // функция shooter
      alert( j ); // должна выводить порядковый номер
    };
    shooters.push(shooter); // и добавлять стрелка в массив
    i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();

// эта ошибка из-за того что внутри цикла изменяется внешняя переменная и обьявляется функция и ссылка на внешнюю переменную i у всех одинакова

