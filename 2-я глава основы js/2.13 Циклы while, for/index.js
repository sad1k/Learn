// Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

//

// решение

for (let i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// решение

let i = 0;

while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let number;
do {
  number = +prompt("Введите число > 100", "");
} while (number === null || number <= 100);

// Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.

function isPrime(n) {
  for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

let n = 10;

for (let i = 2; i < n + 1; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

var findFarmland = function (land) {
  const coords = [];
  function dfs(land, r, c, prevR, prevC) {
    if (r >= land.length || c >= land[0].length || land[r][c] == 0) {
      return [prevR, prevC];
    } else {
      land[r][c] = 0;
      const firstCoords = dfs(land, r + 1, c, r, c);
      const secondCoords = dfs(land, r, c + 1, r, c);

      return [
        Math.max(firstCoords[0], secondCoords[0]),
        Math.max(firstCoords[1], secondCoords[1]),
      ];
    }
  }

  for (let i = 0; i < land.length; i++) {
    for (let j = 0; j < land[0].length; j++)
      if (land[i][j] == 1) {
        coords.push([i, j, ...dfs(land, i, j)]);
      }
  }
  return coords;
};
