// Создайте свою собственную глобальную переменную и попробуйте обратиться к ней из любого места в коде.

globalThis.a = 100


function abc(){
    setTimeout(() => console.log(a), 1)
    return
}

abc()


// Напишите код, который проверяет наличие объекта Promise в глобальном объекте.
// Если объект Promise отсутствует, выведите сообщение "Promise не поддерживается", иначе выведите сообщение "Promise поддерживается".

function checkPromise(){
    if(!globalThis.Promise){
        console.log('Promise не опддерживается')
    }
    console.log('Promise поддерживается')
}

checkPromise()

// Объявите переменную currentUser в глобальной области видимости и присвойте ей объект с полями name и age.
// Напишите функцию displayUserInfo(), которая выводит информацию о текущем пользователе в консоль. Вызовите эту функцию.
currentUser = {name: 'misha', age: 20}



function displayUserInfo(){
    console.log('Имя юзера: ', currentUser.name)
    console.log('Возраст юзера: ', currentUser.age)
}

displayUserInfo()

// Напишите код, который выводит в консоль высоту окна браузера (свойство innerHeight глобального объекта) и ширину окна (свойство innerWidth глобального объекта).

function showInnerSize(){
    console.log(window.innerHeight) // window в node.js нету есть globalThis
    console.log(window.innerWidth)
}

showInnerSize()
// Попробуйте объявить переменную с именем alert и вызвать функцию alert("Hello, world!"). 
// Затем объявите другую переменную с именем alert внутри глобальной области видимости и попробуйте снова вызвать функцию alert("Hello, world!").
// Объясните полученные результаты.

alert = function(...args){
    console.log(...args)
}

alert('Hello, world!') // внутри глобального объекта лежит данный метод переопределяя мы удаляем прошлое значение и он возвращает значение которое мы присвоили

// Напишите код, который объявляет функцию getGlobalObject(), которая возвращает ссылку на глобальный объект. 
// Вызовите эту функцию и сохраните результат в переменной. Выведите содержимое переменной в консоль.

function getGlobalObject(){
    if(globalThis){
        return globalThis
    }
    if(window){
        return window
    }
    if(global){
        return global
    }
    
    return null
}

let globalObject = getGlobalObject()
console.log(globalObject)

