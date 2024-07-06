// Что вообще такое примеси, это добавление методов из других классов в сам класс

class User {
  someMethod(){
    console.log('123')
  }
}

let userMethods = {
  sayHi(){
    console.log('hi')
  },
  sayBye(){
    console.log('bye')
  }
}

Object.assign(User.prototype, userMethods)

let user = new User()

user.sayHi()



class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
}


const trackerMixin = {
  getWeight(){
    if(this.weight){
      console.log(`Текущий вес ${this.weight} человека ${this.name}`)
      return this.weight
    }
  },
  setWeight(weight){
    this.weight = weight
    console.log(`Вес изменили на ${weight}`)
  },

  incrementWeight(increment){
    if(this.weight){
      this.weight += increment
      console.log(`Вес увеличился на ${increment}`)
    }
  }
}


Object.assign(Person.prototype, trackerMixin)

let john = new Person('John', 30);
john.setWeight(70);
console.log(john.getWeight()); // 70
john.incrementWeight(5);
console.log(john.getWeight()); // 75


class ElectricAppliance {
  constructor(power, expirationDate){
    this.power = power
    this.expirationDate = Date.now() + 1000 * 60 * 60 * 24
  }
}

class Furniture {
  constructor(type, producer){
    this.type = type
    this.producer = producer
  }
}


const electricApplianceMixin = {
  turnOn(){
    this.isOn = true
  },
  turnOff(){
    this.isOn = false
  }
}

Object.assign(ElectricAppliance.prototype, electricApplianceMixin)

const furnitureMixin = {
  setMaterial(material){
    this.material = material
  },
  getMaterial(){
    return this.material
  },
  setSize(size){
    this.size = size
  },
  getSize(){
    return this.size
  }
}

Object.assign(Furniture.prototype, electricApplianceMixin)


class ElectricFurniture{
  constructor(){
    this.isOn = false
  }
}


Object.assign(ElectricFurniture.prototype, electricApplianceMixin)
Object.assign(ElectricFurniture.prototype, furnitureMixin)

let myLamp = new ElectricFurniture();
myLamp.setMaterial('Plastic');
myLamp.setSize('Medium');
myLamp.turnOn();

console.log(myLamp.getMaterial()); // Plastic
console.log(myLamp.getSize()); // Medium
console.log(myLamp.isOn); // true