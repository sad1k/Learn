// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:


// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?
function sumTo(n){
    if(n == 1){
        return 1
    }
    return sumTo(n-1) + n
}

console.log(sumTo(5))

// С использованием цикла.

function sumToWithCycle(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum    
}

// С использованием формулы арифметической прогрессии.
const sum = (1 + n)/2 * n

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// самый медленный рекурсия потому что нужно хранить контекст выполнения и при n > 10000 будет переполнение стека,
// самый быстрый это формула так как выполняется за O(1) за один запрос
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?  нет


// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. 
// Факториал n обозначается как n!

// Определение факториала можно записать как:

function factorial(n){
    if(n == 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))


// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:

function fib(n){
    if (n < 50){
        if (n == 1) return 1
        if (n == 2) return 1
        return fib(n - 1) + fib(n - 2)
    }else {
        let a = 1
        let b = 1
        let res = 0   
        for(let i = 0; i < n - 2; i++){
            res = a + b
            b = a
            a = res
        }
        return res
    }
}

console.log(fib(3)) // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757)

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
function printList(list){
    console.log(list.value)
    if(list.next){
        printList(list.next)
    }
}

printList(list)

// С помощью цикла
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

while(list.next){
  console.log(list.value)
  list = list.next
}
console.log(list.value)


// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printListReversed(list){
  if(list.next){
    printListReversed(list.next)
  }
  console.log(list.value)

}
printListReversed(list)
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


let values = []
while(list.next){
  values.push(list.value)
  list = list.next
}

console.log(list.value, ...values.reverse())

// У тебя есть массив, который может содержать числа, а также другие массивы. Нужно написать функцию, которая вычисляет сумму всех чисел во вложенном массиве, включая числа во вложенных массивах любого уровня вложенности.

// Твоя задача
// Напиши функцию sumNestedArray(array), которая принимает массив, который может содержать числа, а также другие массивы.
// Функция должна рекурсивно обрабатывать все вложенные массивы и возвращать сумму всех чисел.
// Если массив пустой, должен возвращаться 0.

function sumNestedArray(array){
  let sum = 0
  for(let elem of array){
    if(Array.isArray(elem)){
      sum += sumNestedArray(elem)
    }else{
      sum += elem
    }
  }
  return sum
}

const arr = [1, [2, 3], [4, [5, 6]], 7];

const sum = sumNestedArray(arr);

console.log(sum); // должно быть 28

// Пример 1: пустой массив
console.log(sumNestedArray([])); // должно быть 0

// Пример 2: одинарный массив
console.log(sumNestedArray([10, 20, 30])); // должно быть 60

// Пример 3: сложный вложенный массив
console.log(sumNestedArray([1, [2, [3, [4]]], 5])); // должно быть 15


// Задача: Поиск ключа в сложном объекте
// Ты работаешь с объектом, который может содержать другие вложенные объекты. Твоя задача — найти значение, связанное с определенным ключом, в этом сложном объекте.

// Твоя задача
// Напиши функцию findValueByKey(obj, key), которая принимает сложный объект obj и строку key.
// Функция должна рекурсивно искать значение, связанное с данным ключом, и возвращать его.
// Если ключ не найден, функция должна возвращать undefined.
// Функция должна работать независимо от уровня вложенности объектов.

function findValueByKey(obj, targetKey){
  if(typeof obj === 'object'){
    for(let [key, value] of Object.entries(obj)){
      if(key === targetKey){
        return value
      }
      if(typeof value === 'object'){
        return findValueByKey(value, targetKey)
      }
     
    }
  }
}
const obj = {
  a: {
    b: {
      c: "valueC",
      d: "valueD"
    },
    e: "valueE"
  },
  f: "valueF"
};

const valueC = findValueByKey(obj, "c");
console.log(valueC); // должно быть "valueC"

const valueZ = findValueByKey(obj, "z");
console.log(valueZ); // должно быть undefined

// getStringCount
// Реализуйте (с использованием рекурсии) функцию getStringCount, 
// которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности. 
// P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount

function getStringCount(obj){
  let count = 0
  if(obj !== null && typeof obj ==='object'){
    for(let elem of Object.values(obj)){
      if(typeof elem === 'string'){
        count += 1
      }
      if(typeof elem === 'object'){
        count += getStringCount(elem)
      }
    }
  }
  return count
}
console.log(getStringCount({
  first: '1',
  second: { prop: '2' },
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth: null,
})); // 3



// Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями:

// begin - начало последовательности,

// end - конец последовательности.

// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

// Подсказки:

// Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
// Сумма чисел последовательности, в которой begin === end, равна begin (или end)

function sequenceSum(begin, end){
  if(begin > end){
    return NaN
  }else{
    if(begin == end){
      return end
    }
    return begin + sequenceSum(begin + 1, end)
  }
}
console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 - -3
console.log(sequenceSum(7, 2));
// 0 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(0, 0));
// 6 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(6, 6));


// оптимизировать функцию getStringCount из задач на методы массивов, чтобы результат вычисления кешировался в WeakMap
// разобраться/загуглить что такое циклическая ссылка в объекте, реализовать такой объект, разобраться почему без доработок getStringCount при наличии циклической ссылки в объекте получаем нежелательное поведение (переполнение стека вызовов), 
// попробовать оптизимизровать решение чтобы захендлить это каким-либо образом и написать комментарий над функцией, 
// как она работает с циклическими ссылками
// Опционаольно, желательно после 1 и 2: исследовать как хендлит циклические ссылки метод JSON.stringify на mdn

let cache = new WeakMap()
let stack = []
// Берет добавляет в стек объект который обрабатывает потом смотрит его свойства если одно из значений ведет ссылкой на 
// на объект из стека то это циклическая ссылка выбрасываем ошибку
function getStringCountOptimized(obj){
  stack.push(obj)
  if(cache.has(obj)){
    return cache.get(obj)
  }
  let count = 0
  if(obj !== null && typeof obj ==='object'){
    for(let elem of Object.values(obj)){
      if(stack.includes(elem)){
        throw new Error('Цикличная ссылка в объекте')
      }
      if(typeof elem === 'string'){
        count += 1
      }
      if(typeof elem === 'object'){
        count += getStringCountOptimized(elem)
      }
    }
  }
  stack.pop()
  cache.set(obj, count)
  return count
}
