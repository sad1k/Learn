// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
};

console.log(JSON.parse(JSON.stringify(user)))


// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
number: 23
};

let meetup = {
title: "Совещание",
occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
let self = null
let replacer = (key, value) => {
    if(key === ''){
        self = value
    }else{
        if(value === self){
            return undefined
        }
    }
    return value
}
console.log(JSON.stringify(meetup, replacer))


// Ты работаешь над проектом, который хранит данные о пользователях в виде объектов. 
// Тебе нужно сериализовать эти объекты в строки JSON для передачи по сети или хранения в базе данных.

// Создай функцию serializeUser, которая принимает объект пользователя и возвращает его строку JSON. 
// При сериализации исключи некоторые поля, такие как "password" и "socialSecurityNumber", 
// чтобы обеспечить безопасность данных. Кроме того, добавь форматирование JSON с отступами для улучшения читаемости.
// Объект пользователя имеет следующую структуру:

// name: строка, имя пользователя
// age: число, возраст пользователя
// email: строка, адрес электронной почты
// password: строка, пароль (должен быть исключен)
// socialSecurityNumber: строка, номер социального страхования (должен быть исключен)

const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    password: "secret123",
    socialSecurityNumber: "123-45-6789"
};

function serializeUser(user){
    return JSON.stringify(user,['name', 'age', 'email'] , 2)
}

const serializedUser = serializeUser(user);
  
  // Ожидаемый результат:
  const expectedJson = `
  {
    "name": "Jane Doe",
    "age": 25,
    "email": "jane.doe@example.com"
  }`;
  
  
  console.log(serializedUser)

  console.log(serializedUser === expectedJson.trim()); // true
  
//   Задача: Перезапись ключей в JSON-объекте
// Ты работаешь над проектом, который получает данные в формате JSON. Однако в этих данных могут быть ключи, которые содержат запрещенные символы или формат, который не подходит для вашего проекта. Тебе нужно переписать эти ключи в более подходящий формат, а затем преобразовать объект обратно в строку JSON.

// Твоя задача
// Напиши функцию reformatKeys(jsonString, keyMap), которая принимает строку JSON и объект keyMap.
// Объект keyMap содержит сопоставления, где ключи — это исходные названия ключей в JSON,
//  а значения — новые названия, которые их заменят.
// Преобразуй строку JSON в объект с помощью JSON.parse.
// Используя объект keyMap, замени ключи в JSON-объекте новыми значениями.
// Преобразуй объект обратно в строку JSON с помощью JSON.stringify и верни его.

function reformatKeys(jsonString, keyMap){
    const obj = JSON.parse(jsonString)
    for(let [key, value] of Object.entries(obj)){
        if(key in keyMap){
            obj[keyMap[key]] = value
            delete obj[key]
        }
    }
    return JSON.stringify(obj)
}

const jsonString = '{"first_name": "John", "last_name": "Doe", "email": "john.doe@example.com"}';
const keyMap = {
  "first_name": "firstName",
  "last_name": "lastName"
};

const newJsonString = reformatKeys(jsonString, keyMap);


console.log(newJsonString); // '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"}';