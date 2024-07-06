// Задача 7: Управление доступом через защищённые свойства
// Создай класс User с защищённым свойством _role. 
// Добавь метод getRole(), который возвращает значение _role. 
// Создай подкласс Admin, который может устанавливать значение _role через метод setRole(role).

// Задача 8: Приватные свойства для конфиденциальности
// Создай класс SecureNote с приватным свойством #content. 
// Добавь методы setContent(content) и  getContent(), 
// которые позволяют устанавливать и получать значение #content.


class User{
  constructor(role){
    this._role = role
  }
  getRole(){
    return this._role
  }

  setRole(role){
    this._role = role
  }
}

class Admin extends User{
  constructor(){
    super()
    this.setRole()
  }
  setRole(){
    super.setRole('admin')
  } 
}

let admin = new Admin()
console.log(admin) // Admin { _role: 'admin' } работает как обычное свойство 

class SecureNote{
  #content = null
  
  setContent(content){
    this.#content = content
  }

  getContent(){
    return this.#content
  }
}

console.log(Object.getOwnPropertyDescriptors(SecureNote)) // его нету тут(

class ExtendedSecureNote extends SecureNote{
  constructor(props) {
    super(props);
    console.log(this.#content) // вообще никак не достучатся
  }
  
}

let set = new ExtendedSecureNote('123') // Private field '#content' must be declared in an enclosing class