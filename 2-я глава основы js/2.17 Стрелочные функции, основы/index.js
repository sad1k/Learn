// Задачи
// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Задача:

// У вас есть массив объектов, представляющих книги в библиотеке.
// Каждая книга имеет несколько свойств, включая title, author, year, copiesAvailable.
// Ваша задача - написать функцию getAvailableBooks, которая возвращает массив книг,
// где количество доступных копий больше 0. Функция должна использовать стрелочную функцию для фильтрации.
// Кроме того, напишите функцию formatBooks, которая принимает массив книг и возвращает массив строк в формате "Title by Author (Year)".

const books = [
  { title: "Book A", author: "Author A", year: 2000, copiesAvailable: 3 },
  { title: "Book B", author: "Author B", year: 2010, copiesAvailable: 0 },
  { title: "Book C", author: "Author C", year: 1999, copiesAvailable: 2 },
];

function getAvailableBooks(books) {
  return books.filter((book) => book.copiesAvailable > 0);
}

function formatBooks(books) {
  return books.map((book) => `${book.title} by ${book.author} (${book.year})`);
}

const availableBooks = getAvailableBooks(books);
const formattedBooks = formatBooks(availableBooks);
console.log(availableBooks);
console.log(formattedBooks);
