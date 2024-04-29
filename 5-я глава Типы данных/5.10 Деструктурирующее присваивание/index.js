// У нас есть объект:
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = {
    name: "John",
    years: 30,
  };
let {name, years: age, isAdmin = false} = user
console.log(name, age, isAdmin)


// У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
// это так для практики, ну прикольчик такой
function topSalary({a= Object.entries(arguments?.[0]).sort((a, b) => b[1] - a[1])[0]} = {a: [null]}){
    return a[0] 
}

console.log(topSalary(salaries))
console.log(topSalary())
function topSalary(salaries){
    if(!salaries){
        return null
    }
    let maxSalary = -1
    let workerName = ''
    for(let [name, salary] of Object.entries(salaries)){
        if(salary > maxSalary){
            maxSalary = salary
            workerName = name
        }
    }
    return workerName
}

console.log(topSalary(salaries))
console.log(topSalary())


// Деструктрурировать массив как объект и получить не undefined значения. 
// Деструктурировать объект как массив. Какая ошибка появляется? 
// Применить Symbol.iterator чтобы деструкторизировать без ошибок.

let obj = {
    a:'1', b:2, c:3,
    [Symbol.iterator](){
      let values = Object.values(this)
      let i = 0
      return {
        next(){
          console.log(values[i])
          return {done:(i === values.length - 1), value:values[i++]}
        }
      }
    }
  }
  
  let [a, b, c] = obj
  console.log(a)


