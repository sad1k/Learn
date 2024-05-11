// Установка и уменьшение значения счётчика
// важность: 5
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.

// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter(){

    function counter(){
        return counter.count++
    }

    counter.count = 0

    counter.set = function(value){
        count = value
    }

    counter.decrease = function(){
        count-=1
    }
    return counter
}

let greetings = function greet(name){
    console.log('Hello!', name)
}

// greet('Misha') // error
greetings('misha') // Hello! misha

let counter = makeCounter()
counter.set(10)
console.log( counter() )



// Сумма с произвольным количеством скобок
// важность: 2
// Напишите функцию sum, которая бы работала следующим образом:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.


let sum = function sum(a){
    if(sum.summa){
        sum.summa += a
    }else{
        sum.summa = a
    }
    sum.valueOf = function(){
        return sum.summa
    }
    return sum 
}

console.log(sum(1)(2) == 3)


// Создайте функцию, которая использует вложенную функцию для выполнения определенной логики. 
// Внутренняя функция должна быть объявлена как Named Function Expression. 
// Вызовите внутреннюю функцию из внешней функции и выведите результат в консоль.

function outer(){

    let factorial = 10

    let func = function factorial(n){
        if(n <= 1){
            return 1
        }
        return factorial(n - 1) * n
    }
    console.log(func(5))
}

outer()

// Напишите функцию, используя Named Function Expression, которая создает объект с методом. Убедитесь, что даже если переменная, содержащая функцию, будет переопределена, метод объекта сохранится. Проверьте это, вызвав метод объекта после переопределения переменной с функцией.

let func = function createObj(a){
    let obj = {method: 1}
    return obj
}

let obj = func()
func = null
console.log(obj.method)

console.log(obj.method.name)