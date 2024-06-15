// Создайте класс Vector для представления вектора в трехмерном пространстве (свойства для координат x, y, z). 
// Добавьте в прототип Vector два метода plus() и scalar() для вычисления суммы двух векторов и скалярного произведения двух векторов. 
// Добавьте в прототип свойство только для чтения length, подсчитывающее длину вектора. 
// Переопределите в классе Vector методы toString() и valueOf().
// Протестируйте созданный класс.

class Vector{
  constructor(x, y, z){
    this.x = x
    this.y = y
    this.z = z
  }

  plus(vect){
    return new Vector(this.x + vect.x, this.y + vect.y, this.z + vect.z)
  }

  scalar(vect){
    return this.x * vect.x + this.y * vect.y + this.z * vect.z
  }

  toString(){
    return `Vector(${this.x},${this.y},${this.z})`
  }

  valueOf(){
    return this
  }
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function(){
    return (this.x**2 + this.y ** 2 + this.z**2)**(1/2) 
  } ,
  enumerable:false,
  configurable:false
})





module.exports = Vector