

console.log(Date.now())
console.log(Date.keys({'213':1})) // Date keys is not a function
// не наследуются статические методы от Object

class MyMap extends Map{
  isEmpty(){
    return this.size() === 0
  }

  static get [Symbol.species](){ 
    return String
  }
}

let mapa = new MyMap()

console.log(mapa.keys())


class SuperArray extends Array{
  static get [Symbol.species](){
    return String
  }
}

let coolArr = new SuperArray(1,2,3,4)

console.dir(coolArr.constructor)


class SuperArray extends Array{
  static get [Symbol.species](){
    return 1
  }
}

Array.prototype.newFunc = function(){
    console.log(typeof new this.constructor())
}

let coolArr = new SuperArray(1,2,3,4)

console.log(coolArr.constructor)
coolArr.newFunc() // object


class SuperArray extends Array{
  static get [Symbol.species](){
    return Boolean
  }
}

Array.prototype.newFunc = function(){
    console.log(typeof new this.constructor())
}

let coolArr = new SuperArray(1,2,3,4)

console.log(coolArr.map((a) => a + 1)) // Boolean
coolArr.newFunc() // object