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