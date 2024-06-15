// Ошибка создания экземпляра класса
// важность: 5
// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

// Улучшенные часы
// важность: 5
// У нас есть класс Clock. Сейчас он выводит время каждую секунду

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}


class ExtendedClock extends Clock{
  constructor(template, precision = 1000) {
    super(template);
    this.precision = precision
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.


// Задача имеет название, описание, дату начала и дату окончания.
//  Любая задача может иметь набор дочерних подзадач. 
//  Создайте класс для представления задачи. 
//  Выполняемая задача – наследник задачи с дополнительными свойствами
//  : - процент выполнения (число); - флаг задача завершена.

//  Реализуйте данное наследование.

class Task{
  constructor(name, description, dateStart, dateEnd){
    this.name = name
    this.description =  description
    this.dateEnd = dateEnd
    this.dateStart = dateStart
  }
}


class ExecutingTask extends Task{
  constructor(name, description, dateStart, dateEnd, progress, done){
    if(arguments.length < 6){
      throw new Error('Не переданы все аргументы')
    }
    super(name, description, dateStart, dateEnd)
    this.completeProgress = progress;
    this.done = done
  }
}

module.exports = ExecutingTask