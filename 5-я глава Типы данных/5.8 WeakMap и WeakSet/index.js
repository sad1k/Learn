
let hardFunc = (n) => {
    for(let i = 0; i < 1000000; i++){
        n = n ** n
    }
    return n
}

const cachedFunc = (n, func) => {
   
    if(cache.has(func)){
        if(cache.get(func)[n]){
            console.log("cached")
            return cache.get(func)[n]
        }else{
            let result = func(n)
            cache.get(func)[n] = func(n)
            return result
        }
    }else{
        let result = func(n)
        cache.set(func, {n: result})
        return result
    }

}

const cache = new WeakMap()
console.log(cachedFunc(100, hardFunc))
console.log(cachedFunc(19, hardFunc))
hardFunc = null

console.log(cache.has(hardFunc))


let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
]

const readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])
console.log(readMessages.has(messages[0]))
messages.shift()
console.log(readMessages.has(messages[0]))


// Хранение отметок "не прочитано"
// важность: 5
// Есть массив сообщений:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.


// WeakSet потому что его используют для хранения дополнительной информации, которая отвечает на вопросы "да/нет"

// Хранение времени прочтения
// важность: 5
// Есть массив сообщений такой же, как и в предыдущем задании.

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
// Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date, которые мы разберём позднее.

// В такой задаче лучше использовать WeakMap для хранения даты в качестве значения, а ключ объектом сообщения

const sendMessages = new WeakMap()

sendMessages.set(messages[0], new Date(Date.now()))
sendMessages.set(messages[1], new Date(Date.now()))

messages.shift()
console.log(sendMessages.get(messages[0]))