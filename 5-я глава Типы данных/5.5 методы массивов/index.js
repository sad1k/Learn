// Задачи
// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


function camelize(str){
    return str.slice(0, str.indexOf('-')) + str.split('-').slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('')
}

console.log(camelize("background-color")) // == 'backgroundColor';
console.log(camelize("list-style-image")) // == 'listStyleImage';
console.log(camelize("-webkit-transition")) // == 'WebkitTransition';



// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];

function filterRange(arr, start, end){
    return arr.filter(elem => elem <= end && elem >= start)
}

console.log(filterRange(arr, 1, 4))
console.log(arr)

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]

let arr1 = [5, 3, 8, 1];

function filterRange(arr, start, end){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < start || arr[i] > end){
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(filterRange(arr1, 1, 4))

console.log(arr1)

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];

// // ... ваш код для сортировки по убыванию

// alert( arr ); // 8, 5, 2, 1, -10

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => b - a)

console.log(arr2)

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    let arr1 = [...arr]
    return arr1.sort()
}


let sorted = copySorted(arr3);

console.log(arr3)
console.log(sorted)

// Создать расширяемый калькулятор
// важность: 5
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.


function Calculator(){
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };
    this.calculate = (seq) => {
        let [a, method, b] = seq.split(' ')
        return this.methods[seq.split(' ')[1]](+a, +b)
    }

    this.addMethod = (seq, method) => {
        this.methods[seq] = method
    }
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = /* ... ваш код */

// alert( names ); // Вася, Петя, Маша

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name)

console.log( names ); // Вася, Петя, Маша

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// Например:

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(user => ({fullName: `${user.name} ${user.surname}`, id:user.id}))

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

function sortByAge(arr){
    return arr.sort((user, user1) => user.age - user1.age)
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 28 };
arr = [ vasya, petya, masha ];

sortByAge(arr);

console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя


// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

function shuffle(arr){
    for(let i = 0; i < arr.length; i++){
        let randIndex = Math.trunc(i + Math.random() * (arr.length - 1))
        let temp = arr[randIndex]
        arr[randIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}

arr = [1, 2, 3];

console.log(shuffle(arr));

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//}
  

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(myArr){
    return myArr.reduce((a, b) => a + b.age ,0)/myArr.length
}

vasya = { name: "Вася", age: 25 };
petya = { name: "Петя", age: 30 };
masha = { name: "Маша", age: 29 };

arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); 

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

function unique(arr) {
    let res = []
    arr.forEach(element => {
        if(!res.includes(element)){
            res.push(element)
        }
    });
    return res
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O


// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

// Например:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // после вызова у нас должно получиться:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Такая функция очень удобна при работе с данными, которые приходят с сервера.

// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

// Используйте метод .reduce в решении.

function groupById(users){
    return users.reduce((a, b) => ({...a, [b.id] : b}), {})
}
users = [
      {id: 'john', name: "John Smith", age: 20},
      {id: 'ann', name: "Ann Smith", age: 24},
      {id: 'pete', name: "Pete Peterson", age: 31},
];
    
let usersById = groupById(users);

console.log(usersById)
    





// 1249. Minimum Remove to Make Valid Parentheses
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let indexes = []
    for(let i = 0; i < s.length; i++){
        if(s[i] == '('){
            stack.push([s[i], i])
        }else if( s[i] == ')'){
            if(stack.length == 0){
                indexes.push(i)
                continue
            }
            stack.pop()
        }
    }
    if(stack.length != 0){
        stack.forEach(elem => indexes.push(elem[1]))
    }
    let res = s.split('')
    indexes.forEach(elem => res.splice(elem, 1, '*'))
    return res.join('').split('*').join('') 
};

function findBinary(arr, elem){
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        let middle = Math.floor((left+right)/2)
        if(arr[middle] == elem){
            return middle
        }else if(arr[middle] > elem){
            right = middle - 1
        }else if(arr[middle] < elem){
            left = middle + 1
        }
    }
    return -1
}

let arr12 = []
for(let i = 0; i < 10000000;i++){
    arr12.push(i)
}
let start1 = Date.now()
findBinary(arr12, 9999999)
let start2 = Date.now() - start1
console.log(start2)
start1 = Date.now()
arr12.findIndex((elem) => elem == 9999999)
start3 = Date.now() - start1
console.log(`Больше в ${start3/start2} раз`)


function findFirstEvenIndex(arr) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] % 2 !== 0) {
            result = mid;
            left = mid + 1; // продолжаем поиск в правой части
        } else {
            right = mid - 1;
        }
    }
    
    return result + 1; // возвращаем индекс, начиная с которого все числа четные
}

// Пример использования
let arr35 = [1, 3, 5, 6, 8, 10];
console.log("Индекс, начиная с которого все числа четные:", findFirstEvenIndex(arr35));


function sortedSquares(arr){
    let left = 0
    let right = arr.length - 1
    let res = []
    while(let)
    return res
}


let coords = [2, 5, 7, 11, 15, 20] // координаты стойл
let k = 3 // число коров

function isCorrect(x) { // проверяем, можно ли поставить K коров в стойла, если между коровами расстояние хотя бы x
  let cows = 1
  let lastCow = coords[0]
  for(let c of coords){
    if((c - lastCow) >= x){
      lastCow = c
      cows++
    }
  }

  return cows >= k
}

function findMaxDistance(){
    let left = 0 // расставить коров на расстоянии 0 можно всегда так как K < N
    let right = Math.max(...coords) - Math.min(...coords) + 1 // при таком расстоянии даже 2 коровы не поместяться
    while(right - left != 1){
      let mid = Math.floor((right + left)/2)
      if(isCorrect(mid)){ // проверяем, можно ли поставить K коров в стойла, если между коровами расстояние хотя бы middle
        left = mid // left всегда должна указывать на ситуацию, когда можно поставить коров
      }else{
        right = mid // right всегда должна указывать на ситуацию, когда нельзя поставить коров
      }
    }
    return left // максимальное расстояние, на котором можно расставить коров в стойла
}

console.log(findMaxDistance())



// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 