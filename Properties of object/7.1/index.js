// Задача 1: Создание свойства с определёнными флагами
// Создайте объект user с двумя свойствами:

// name со значением "John", которое не может быть изменено, удалено и его нельзя перечислить.
// age со значением 30, которое может быть изменено и удалено, но не может быть перечислено.

let obj = Object.defineProperties(
  {},
  {
    name: {
      value: "John",
      writable: false,
      configurable: false,
      enumerable: false,
    },
    age: {
      value: 30,
      writable: true,
      configurable: true,
    },
  }
);
for (let prop of Object.keys(obj)) {
  console.log(prop); // ''
}

// Задача 2: Проверка флагов свойства
// Создайте объект car с двумя свойствами: make и model.

// Убедитесь, что свойство make можно изменить, но нельзя удалить и перечислить.
// Убедитесь, что свойство model нельзя изменить, удалить и перечислить.
// Напишите функцию, которая проверяет флаги каждого свойства и возвращает соответствующие результаты.

let car = Object.defineProperties(
  {},
  {
    make: {
      value: true,
      writable: true,
      configurable: false,
      enumerable: false,
    },
    model: {
      value: "mercedes",
    },
  }
);

function check(car) {
  let descriptors = Object.getOwnPropertyDescriptors(car);
  let cond1 =
    descriptors["make"]["writable"] === true &&
    descriptors["make"]["configurable"] === false &&
    descriptors["make"]["enumerable"] === false;
  let cond2 =
    descriptors["model"]["writable"] === false &&
    descriptors["model"]["configurable"] === false &&
    descriptors["model"]["enumerable"] === false;
  return cond1 && cond2
}
console.log(check(car));


// Задача 3: Изменение флагов свойства
// Создайте объект book с одним свойством title, значение которого равно "JavaScript Guide".

// Сделайте так, чтобы это свойство нельзя было изменить.
// Затем измените флаги так, чтобы свойство стало изменяемым и перечисляемым.

let book = {
  title:  "JavaScript Guide"
}
Object.defineProperty(book, 'title', {
  writable : false,
  configurable: true,
  enumerable: true
})

Object.defineProperty(book, 'title', {
  writable : true,
  configurable: true,
  enumerable: true
})

// Задача 6: Копирование объекта с сохранением флагов
// Создайте объект settings с двумя свойствами: theme и notifications.

// Сделайте так, чтобы theme нельзя было изменить, удалить и перечислить.
// Сделайте так, чтобы notifications можно было изменять, удалять и перечислять.
// Напишите функцию, которая создаёт глубокую копию объекта с сохранением всех флагов свойств.

const settings = Object.defineProperties({}, {
  'theme': {
    value: 'dark',
  },
  'notifications': {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
  }
})

function copyWithDescriptors(obj){
  return Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))
}

// Задача 8: Защита объекта от добавления новых свойств
// Создайте объект profile с двумя свойствами: username и email.

// Убедитесь, что новые свойства нельзя добавить к этому объекту, но существующие можно изменять и удалять.

let profile = {
  username: 'cool',
  email: 'gmail.com'
}

Object.preventExtensions(profile)


profile.newProp = '123'
console.log(profile.newProp) // undefined

