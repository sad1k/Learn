// Задача 1: Основы статических методов
// Создай класс MathUtils с двумя статическими методами:

// sum(a, b) – возвращает сумму двух чисел.
// multiply(a, b) – возвращает произведение двух чисел.
// Задача 2: Статические свойства
// Добавь статическое свойство PI в класс MathUtils, которое будет хранить значение числа π (3.14159).

// Задача 3: Использование статических методов
// Создай класс Circle, который принимает радиус в качестве параметра. Добавь метод area(), который возвращает площадь круга, используя статическое свойство PI из класса MathUtils.

// Задача 4: Счётчик экземпляров
// Создай класс Counter с двумя статическими методами:

// increment() – увеличивает внутренний счётчик на 1.
// getCount() – возвращает текущее значение счётчика.
// Задача 5: Управление пользователями
// Создай класс User, который принимает имя пользователя в качестве параметра. Добавь статический метод createAdmin(), который возвращает объект пользователя с именем "Admin".

// Задача 6: Проверка типов
// Создай класс TypeChecker с двумя статическими методами:

// isNumber(value) – возвращает true, если значение является числом, иначе false.
// isString(value) – возвращает true, если значение является строкой, иначе false.
// Задача 7: Конфигурация системы
// Создай класс SystemConfig с двумя статическими свойствами:

// OS – строка, содержащая название операционной системы.
// VERSION – строка, содержащая версию системы.
// Задача 8: Конвертация единиц
// Создай класс Converter с двумя статическими методами:

// toKilometers(miles) – конвертирует мили в километры.
// toPounds(kilograms) – конвертирует килограммы в фунты.
// Задача 9: Случайные числа
// Создай класс RandomGenerator с двумя статическими методами:

// randomInt(min, max) – возвращает случайное целое число в заданном диапазоне.
// randomFloat(min, max) – возвращает случайное вещественное число в заданном диапазоне.
// Задача 10: Хранение настроек
// Создай класс Settings с двумя статическими методами:

// set(key, value) – сохраняет значение по ключу.
// get(key) – возвращает значение по ключу.

class MathUtils {

  static PI = 3.14159

  static sum(a, b){
    return a + b  
  }

  static multiply(a, b){
    return a * b
  }
}

class Circle{
  constructor(radius) {
    this.radius = radius
  }
  
  area(){
    return  MathUtils.PI * 2 * this.radius
  }

}

class Counter{
  static count = 0 
  static increment(){
    Counter.count += 1
  }

  static getCount(){
    return Counter.count
  }
}

class User{
  constructor(name){
    this.name = name
  }
  static createAdmin(){
    return new User('Admin')
  }
}

class TypeChecker{
  static isNumber(value){
    return typeof value === 'number'
  }

  static isString(value){
    return typeof value === 'string'
  }
}

class SystemConfig{
  static OS = 'windows'
  static VERSION = '10'
}


class Converter{
  static toKilometers(miles){
    return miles * 1.60934
  }

  static toPound(kilograms){
    return kilograms * 2.20462
  }
}


class RandomGenerator{
  static randomInt(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  static randomFloat(min, max){
    return Math.random() * (max - min) + min 
  }
}

class Settings{
  static config = {}
  static set(key, value){
    Settings.config[key] = value
  } 
  static get(key){
    return Settings.config[key]
  } 
}


class ExtendedSettings extends Settings{
  static config = this.config
}


Settings.set('123',1)
ExtendedSettings.set('456', 1)
console.log(ExtendedSettings.config)