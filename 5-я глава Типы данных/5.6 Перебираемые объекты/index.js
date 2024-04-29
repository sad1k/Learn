// [Symbol.iterator]
// Сложность 2/10

// Написать итератор, чтобы выводил рандомные натуральные числа в диапазоне [0..500] и
// итерировал пока не найдет заданное рандомное число (заранее вычисленное по этому же алгоритму
// и имеющееся в свойстве объекта) и показано перед циклом. Алгоритм вынести в отдельную функцию,
// чтобы можно было заюзать как в итераторе так и в объекте при инициализации.

// Заюзать разные способы итерации по итератору.

function randomNum() {
  return Math.floor(Math.random() * 500 + 1);
}

function iterate(){
    console.log(this.num);
    return {
      next() {
        this.variant = randomNum();
        console.log(this.variant);
        if (this.num === this.variant) {
          return { done: true };
        } else {
          return { done: false, value: this.variant };
        }
      },
    };
}

let obj = {
  num: randomNum(),
  variant: -1,
  [Symbol.iterator]: iterate
};

for(let elem of obj){

}// бесконечный цикл :(


let iterator = obj[Symbol.iterator]()
do{
   
}while(!iterator.next().done)

while(!iterator.next().done){

}



// Деструктрурировать массив как объект и получить не undefined значения. 
// Деструктурировать объект как массив. Какая ошибка появляется? 
// Применить Symbol.iterator чтобы деструкторизировать без ошибок.

let obj = {
    a:'1', b:2, c:3,
    [Symbol.iterator](){
      let values = Object.values(this)
      let i = 0
      return {
        next(){
          console.log(values[i])
          return {done:(i === values.length - 1), value:values[i++]}
        }
      }
    }
  }
  
  let [a, b, c] = obj
  console.log(a)