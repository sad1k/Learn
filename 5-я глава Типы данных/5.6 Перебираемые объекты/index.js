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