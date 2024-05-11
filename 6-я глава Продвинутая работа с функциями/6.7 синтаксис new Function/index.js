// Напишите функцию, которая принимает строку с математическим выражением (например, "2 * x + 5") и переменную, а затем создает функцию, которая вычисляет значение выражения для заданного значения переменной. 
// Используйте "new Function" для создания функции.

var x = 10

var calculations = new Function('x','return 2 * x + 5')

console.log(calculations(x))

// Пример показывающий   что new Function имеет доступ к глобальному окружению

x = 10

var calculations = new Function('return 2 * x + 5')

console.log(calculations(x))


// Создайте функцию, которая принимает массив объектов с данными и строку шаблона HTML. 
// Функция должна динамически создавать HTML-код, используя данные из массива и шаблон. 
// Используйте "new Function" для создания функции, которая будет генерировать HTML.
let props = {
    title: 'new Function syntax',
    user : {
        name:'misha'
    }
}
let generateHTML = new Function('props', 'return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>${props.title}</title></head><body><div>${props.user ? "Hello " + props.user.name : "You are not authorized" }</div></body></html>`')

console.log(generateHTML(props))


// Напишите функцию, которая принимает имя метода объекта и возвращает новую функцию, 
// которая вызывает этот метод для заданного объекта. 
// Используйте "new Function" для создания функции.

let func = function someFunc(){
    console.log('меня вызвали')
}

let wrapper = new Function('nameMethod', `{
    let newFunc = (obj) => obj[nameMethod]()
    return newFunc
}`)

let obj = {
    method(){
        console.log('меня вызвали')
    }
}
let changedFunc = wrapper('method')
changedFunc(obj)


// Напишите функцию, которая принимает строку условия (например, "item.price > 100") и возвращает новую функцию, которая фильтрует массив объектов, оставляя только те элементы, для которых условие истинно. 
// Используйте "new Function" для создания функции.

let filterFunc = new Function('item', `{
    if(item.price > 100){
        return true
    }
    return false
}`)

let arr = [{price: 300}, {price: 94}, {price: 15}, {price: 150}]
console.log(arr.filter(filterFunc))

// Создайте функцию, которая принимает строку с математической функцией (например, "Math.sin(x) + Math.cos(y)") 
// и возвращает новую функцию, которая вычисляет значение этой функции для заданных значений x и y. 
// Используйте "new Function" для создания функции.
let mathematicalFunc = new Function('x,y','return Math.sin(x) + Math.cos(y)')
console.log(mathematicalFunc(1, 1))