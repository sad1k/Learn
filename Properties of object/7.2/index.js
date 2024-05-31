// Задача 1: Конвертация валют
// Создайте объект currencyConverter с двумя свойствами: usd и eur.

// Реализуйте геттер для eur, который возвращает сумму в евро, эквивалентную usd по текущему курсу (предположим, курс 1 USD = 0.85 EUR).
// Реализуйте сеттер для eur, который устанавливает сумму в долларах, эквивалентную введенной сумме в евро по текущему курсу.
let currencyConverter = {
  _dol: 100,
  get eur(){
    return this._dol * 0.85
  },
  set eur(val){
    this._dol = val * 0.85
  }
}


// Задача 2: Валидация email
// Создайте объект user с одним свойством email.

// Реализуйте сеттер для email, который проверяет, что вводимое значение является допустимым email (содержит "@" и ".").
// Если email недопустим, выводите сообщение об ошибке в консоль и не изменяйте значение.

const user = {
  _email: 'user@name.ru',
  set email(val){
    if(val.includes('@') && val.includes('.')){
      this._email = val
    }else{
      console.log('Неверный email')
    }
  },
  get email(){
    return this._email
  }
}

// Задача 3: Вычисление площади прямоугольника
// Создайте объект rectangle с двумя свойствами: width и height.

// Реализуйте геттер для свойства area, который вычисляет и возвращает площадь прямоугольника.
// Реализуйте сеттер для свойства area, который устанавливает значение площади и изменяет одно из измерений (например, ширину) так,
// чтобы площадь соответствовала новому значению (при фиксированной высоте).

const rectangle = {
  _width: 100,
  _height: 200,
  get area(){
    return this._width * this._height
  },
  set area(val){
    this._width = val/this._height
  }
}


// Задача 4: Форматирование имени
// Создайте объект person с двумя свойствами: firstName и lastName.

// Реализуйте геттер для свойства fullName, который возвращает полное имя в формате "FirstName LastName".
// Реализуйте сеттер для свойства fullName, который принимает полное имя в формате "FirstName LastName" и разделяет его на firstName и lastName.

const person = {
  _firstName: 'alex',
  _lastName: 'popov',
  get fullName(){
    return `${this._firstName} ${this._lastName}` 
  },
  set fullName(val){
    [this._firstName, this._lastName] = val.split(' ')
  }
}


// Задача 7: Работа с корзиной товаров
// Создайте объект cart с массивом items, который содержит объекты с информацией о товарах (например, name и price).

// Реализуйте геттер для свойства total, который вычисляет и возвращает общую стоимость всех товаров в корзине.
// Реализуйте сеттер для свойства total, который не позволяет напрямую устанавливать общую стоимость (выдавайте ошибку в консоль при попытке установить значение).

const cart = {
  _items: [{'name':'board', price: 300 }, {'name':'table', price: 560 }, {'name':'plate', price: 700 }, {'name':'mine', price: 100 }],
  get total(){
    return this._items.reduce((acc, val) => acc.price + val.price, 0)
  },
  set total(val){
    console.log('Вы не можете изменить это свойство')
  }
}


let someObj = Object.defineProperties({_car:'mercedes'}, {
  'car': {
    set: () => {console.log(this._car)},
    get: () => this._car,
    writable:false,
    enumerable: true,
    configurable: true
  }
})  // TypeError


let someObj = Object.defineProperties({_car:'mercedes'}, {
  'car': {
    set: () => {console.log(this._car)},
    get: () => this._car,
    value:false,
    enumerable: true,
    configurable: true
  }
}) // TypeError


let someObj = Object.defineProperties({_car:'mercedes'}, {
  'car': {
    set: () => {console.log(this._car)},
    get: () => this._car,
    enumerable: true,
    configurable: true
  }
})
