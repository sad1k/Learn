// Задачи
// Странный instanceof
// важность: 5
// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B ); // true

// возвращает true так как проверяется прототип объекта а т.е a.__proto__ === B.prototype

// Задача 4: Проверка с кастомным методом
// Создай классы Shape и Circle, где Circle наследует от Shape. 
// В классе Shape добавь метод isShape(object), который использует instanceof для проверки, является ли объект экземпляром класса Shape.

class Shape{
  constructor(props) {
    this.radius = props.radius
  }
  
  static [Symbol.hasInstance](obj){
    console.log('1')
    if(obj.radius) return true
  }

  
}

class Circle extends Shape{
  isShape(object){
    return object instanceof Shape
  }
}

let cir = new Circle({radius: '5'})

console.log(cir.__proto__.__proto__ === Shape.prototype)


console.log({}.toString.call(globalThis)) // [object global]
console.log({}.toString.call([])) // [object Array]
console.log('123'[Symbol.toStringTag])

obj1 = {
  foo: 'foo',
  bar: 'bar'
} 
obj2 = {
  bar:'foo',
  same:'same'
}
result = {
  foo: 'foo',
  bar:'foo'
}

const mergeSameKeys = (obj1, obj2) => {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  for(let i = 0; i < keys1.length; i++){
    let key1 = keys1[i]
    for(let j = 0; j < keys2.length; j++){
      let key2 = keys2[j]
      if(key1 === key2){
        obj1[key1] = obj[key2]
      }
    }
  }
  return obj1
}



arr = [6.1, 4.2, 6.3]
result=  {
  '4': [4.2],
  '6': [6.1, 6.3]
}

const groupBy = (arr, callbackFn) => {
  const result = {}
  arr.forEach(item => {
    let resultCallback = callbackFn(item)
    result[resultCallback] ?
      result[resultCallback].push(item):
      result[resultCallback] = [item]
    
  });
  return result
}