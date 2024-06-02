// Работа с прототипами
// важность: 5
// В приведённом ниже коде создаются и изменяются два объекта.

// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true

delete rabbit.jumps;

console.log( rabbit.jumps ); // null, берет из прототипа 

delete animal.jumps;

console.log( rabbit.jumps ); // undefined, брать негде


// Алгоритм поиска
// важность: 5
// Задача состоит из двух частей.

// У нас есть объекты:

let head = {

  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути:
//  pockets → bed → table → head. 
//  Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
// При необходимости составьте цепочки поиска и сравните их.

// Получить быстре будет через head.glasses так как через цепочка прототипов для pockets: poskets -> bed -> table -> head 
// для head.glasses: head, он сразу находит свойство



// Куда будет произведена запись?
// важность: 5
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); // запись свойства full в rabbit так как this = rabbit

// Почему наедаются оба хомяка?
// важность: 5
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple

// потому что при обращении this.hamster он не находит это свойство в собственном объекте и обращается к родителю в котором общий массив
// так и наедаются
// cделать им собственное свойство stomach

// Используя принципы прототипного наследования измените объекты так что бы объект "person" знал о свойствах других объектов.


const generalInfo = {
  type: 'animal'
};

const creatureInfo = {
  bodyMaterial: 'slime',
  color: 'blue'
};

const person = {
  name: 'Rimu'
};

Object.setPrototypeOf(person, creatureInfo)

Object.setPrototypeOf(creatureInfo, generalInfo)


// Ожидмаемый результат:
console.log(person.name); // Rimu
console.log(person.bodyMaterial); // slime
console.log(person.color); // blue
console.log(person.type); // animal


// Исправьте ошибки в коде что бы он заработал:

const flower = {
  0: "Roses are red",
  1: "Violets are blue",
  2: "I’m allergic to flowers",
  3: "Achoo!",
  length: 4,
};


flower.reduce = Array.prototype.reduce;


const result = flower.reduce((acc, cur) => {
  return acc + ', ' + cur;
});


// Ожидмаемый результат:

console.log(result); //  Roses are red, Violets are blue, I’m allergic to flowers, Achoo!