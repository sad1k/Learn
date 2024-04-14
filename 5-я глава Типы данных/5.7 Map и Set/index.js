// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr){
    return [...(new Set(arr)).values()]
}

let values = ["Hare", "Krishna", "Hare", "Krishna", ":-O"]

console.log(unique(values))

// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

// Например:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

// Например:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr){
    return [...(new Map(Object.entries(arr.reduce((a, b) => {
        a[b.toLowerCase().split('').sort()] = b
        return a
    } , {})))).values()]
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr))

// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()) // не сработал, потому что методы возвращают перебираемый объект, а не массив

keys.push("more")

console.log(keys)





// Set Intersection Function: Write a function that takes two sets as input and returns a new set containing the intersection
// of the two sets (i.e., the elements that are common to both sets).
function myIntersection(set1, set2){
    const intersection = new Set();
    for (const item of set1) {
        if (set2.has(item)) {
            intersection.add(item);
        }
    }
    return intersection
}
let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([5, 2, 3, 6])

console.log(myIntersection(set1, set2)) // Set(2) { 1, 9 }

// Map Filtering: Write a function that takes a map and a predicate function as input and returns a new map containing only 
// the key-value pairs that satisfy the predicate.

function filterMap(map, func){
    const filterMap = new Map()
    for (const [key, value] of map.entries()){
        if(func(value)){
            filterMap.set(key, value)
        }
    }
    return filterMap
}

const mapa = new Map([[true, 100], [false, 200], [{}, 500]])
let filteredMap = filterMap(mapa, (value) => value > 300 )
console.log(filteredMap)

// Set Operations: Implement functions for set operations such as union, difference, and subset checking. Test these functions with various sets to ensure correctness.

function myUnion(set1, set2){
    return new Set([...set1, ...set2])
}

function myDifference(set1, set2){
    const difference = new Set()
    for(const elem of set1){
        if(set2.has(elem)){
            continue
        }
        difference.add(elem)
    }
    return difference
}

function subsetCheck(set1, set2){
    return [...set2.values()].every(elem => elem in set1)
}

let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([5, 2, 3, 6])
console.log(myUnion(set1, set2))
console.log(myDifference(set1,set2))
console.log(subsetCheck(set1, set2))
