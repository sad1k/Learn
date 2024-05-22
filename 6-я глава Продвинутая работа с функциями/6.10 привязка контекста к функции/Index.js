function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
// null

// Повторный bind
// важность: 5
// Можем ли мы изменить this дополнительным связыванием?

// Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
// Вася bind позволяет привязать this Только один раз

// Свойство функции после bind
// важность: 5
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?
// выведет undefined так как bind возвращает новый экзотический объект функции который имеет привязанный this


// Исправьте функцию, теряющую "this"
// важность: 5
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// Использование частично применённой функции для логина
// важность: 5
// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
// Ваши изменения должны затрагивать только выделенный фрагмент кода.


let func = (() => console.log(this.name)).bind({name: 'misha'})
func() // пустая строка не привязывается к стрелочной функции this берется из внешнего


let otherFunc = () => console.log(this.name)
let obj = {name: 'misha', otherFunc}
obj.otherFunc()

// Студента можно подписать на событие, производимое преподавателем (например, начало лекции или показ нового слайда) — то есть указать, какая функция должна быть вызвана при наступлении этого события.

// Ваша задача — реализовать несколько методов:

// подписка на событие — on
// отписка от события — off
// вызов события — emit

const lecturer = {
  subscriptions = {},
  on(event, student, eventHandler){
    if(event in this.subscriptions){
      this.subscriptions[event].push([eventHandler, student])
    }else{
      this.subscriptions[event] = [[eventHandler, student]]
    }
  },

  off(event, student){
    for(let i = 0; i < this.subscriptions[event].length; i++){
      if(student === subscribe[1]){
        this.subscriptions[event] = this.subscriptions[event].splice(i, 1)
        break
      }
    }
  },

  emit(event){
    for(let subscribe of this.subscriptions[event]){
      subscribe[0].apply(subscribe[1])
    }
  }
}