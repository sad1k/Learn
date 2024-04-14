// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Если объект salaries пуст, то результат должен быть 0.

// Например:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650
let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };
function sumSalaries(salaries){
    return Object.values(salaries).reduce((x, y) => x + y, 0)
}

console.log(sumSalaries(salaries))

// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

function count(obj){
    return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};
console.log(count(user))


// Слияние Объектов в Единый Объект:

// Напишите функцию mergeObjects, которая принимает несколько объектов в качестве аргументов и возвращает новый объект, содержащий все ключи и значения из всех переданных объектов.
// Используйте метод Object.entries() для преобразования каждого объекта в массив пар ключ-значение, затем объедините эти массивы, а затем преобразуйте обратно в объект с помощью Object.fromEntries().

function mergeObjects(obj1, obj2){
    return Object.fromEntries([...Object.entries(obj1), ...Object.entries(obj2)])
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, b: 3 };

console.log(mergeObjects(obj1, obj2))


// Подсчет Уникальных Свойств:

// Напишите функцию countUniqueProperties, которая принимает массив объектов в качестве параметра и возвращает количество уникальных свойств, встречающихся в этих объектах.
// Используйте методы Object.keys() и Set для отслеживания уникальных свойств.

function countUniqueProperties(objects){
    const keys = []
    objects.forEach(obj => keys.push(...Object.keys(obj)))
    return new Set(keys)
}

const objects = [
    { a: 1, b: 2 },
    { b: 3, c: 4 },
    { c: 5, d: 6 }
];

console.log(countUniqueProperties(objects))