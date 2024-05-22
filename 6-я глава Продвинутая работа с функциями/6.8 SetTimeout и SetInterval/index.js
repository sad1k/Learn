function printNumbers(from, to) {
  let timerId = setInterval(
    () => (from <= to ? console.log(from++) : clearInterval(timerId)),
    1000
  );
}

printNumbers(1, 5);

function printNumbers(from, to) {
  let timerId = setTimeout(function func() {
    if(from <= to) {
      console.log(from++)
      timerId = setTimeout(func, 1000)
    }else{
      clearTimeout(timerId)
    } 
  },
  1000
  );
}
printNumbers(1, 5);

// В приведённом ниже коде запланирован вызов setTimeout, 
// а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}

// функция будет запланирована после цикла и покажет алерт 100000000