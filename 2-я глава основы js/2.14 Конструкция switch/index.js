// Задачи
// Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

if (browser === "edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}

// Требуется выполнить несколько действий:

// Сортировка: Отсортируйте массив по стоимости заказа в убывающем порядке.
// Фильтрация: Используя цикл for или while, отфильтруйте заказы с суммой менее 50.
// Группировка: Используя конструкцию switch, сгруппируйте заказы по статусу (например, "Новый", "В процессе", "Завершён").
// Функция: Напишите функцию processOrders(orders), которая принимает массив заказов и возвращает отсортированный, отфильтрованный, сгруппированный объект.

const orders = [
  {
    id: 1,
    client: "John Doe",
    status: "Completed",
    total: 150,
    items: ["item1", "item2"],
  },
  {
    id: 2,
    client: "Jane Smith",
    status: "Pending",
    total: 45,
    items: ["item3"],
  },
  {
    id: 3,
    client: "Sam Brown",
    status: "New",
    total: 250,
    items: ["item4", "item5", "item6"],
  },
  {
    id: 4,
    client: "Chris White",
    status: "In Process",
    total: 80,
    items: ["item7"],
  },
  {
    id: 5,
    client: "Nancy Green",
    status: "Completed",
    total: 65,
    items: ["item8"],
  },
];

function processOrders() {
  orders.sort((a, b) => {
    return a.client.localeCompare(b.client);
  });
  console.log(orders);
  const filteredOrders = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].total < 50) {
      filteredOrders.push(orders[i]);
    }
  }
  console.log(filteredOrders);
  let count = 0;
  const groupByStatus = {
    New: [],
    Completed: [],
    Pending: [],
    "In Process": [],
  };
  while (count < orders.length - 1) {
    switch (orders[count].status) {
      case "New":
        groupByStatus["New"].push(orders[count]);
        break;
      case "Completed":
        groupByStatus["Completed"].push(orders[count]);
        break;
      case "Pending":
        groupByStatus["Pending"].push(orders[count]);
        break;
      case "In Process":
        groupByStatus["In Process"].push(orders[count]);
        break;
    }

    count++;
  }
  console.log(groupByStatus);
}

processOrders();
