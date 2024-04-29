// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
const date = new Date(2012, 1, 20, 3, 12, 0);
console.log(date);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
//  «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС»

function getWeekDay(date) {
  const shortDaysName = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return shortDaysName[date.getDay()];
}

console.log(getWeekDay(new Date()));

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2)
// и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский»
// день недели для даты date.

function getLocalDay(date) {
  if (date.getDay() === 0) {
    return 7;
  }
  return date.getDay();
}
let date = new Date(2012, 0, 3); // 3 января 2012 года
date.setDate(date.getDate() + 5);
console.log(getLocalDay(date));

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое
// и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:
// P.S. Функция не должна изменять переданный ей объект date.
function getDateAgo(date, days) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() - days);
  return newDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

// Параметры:

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0); // нулевой день считается как предыдущий
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  const firstDate = new Date();
  firstDate.setHours(0);
  firstDate.setMinutes(0);
  firstDate.setMilliseconds(0);
  return (new Date() - firstDate) / 1000;
}
console.log(getSecondsToday());

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 1);
  endDate.setHours(0);
  endDate.setMilliseconds(0);
  endDate.setMinutes(0);
  return (endDate - new Date()) / 1000;
}

console.log(getSecondsToTomorrow());

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm".
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
  const diff = new Date() - date;
  if (diff < 1000) {
    return "Прямо сейчас";
  } else if (diff < 60 * 1000) {
    return `${(diff / 1000).toFixed(0)} сек. назад`;
  } else if (diff < 60 * 60 * 1000) {
    return `${(diff / (60 * 1000)).toFixed(0)} мин. назад`;
  } else {
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.getMonth().toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(2);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
}
console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));



// Дана дата в формате YYYY-MM-DDTHH:mm:ss.sssZ. Преобразуйте эту дату в формат день.месяц.год.
function formatDate(strDate){
  let date = new Date(Date.parse(strDate))
  return `${date.getDate()}.${date.getMonth()}:${date.getFullYear}`
}


// Задача: Определение возраста и форматирование дат
// Ты разрабатываешь систему управления персоналом, которая должна работать с данными о датах рождения сотрудников. Тебе нужно рассчитать возраст сотрудника на текущую дату и затем отформатировать дату в удобочитаемом виде.

// Твоя задача
// Напиши функцию calculateAge(birthdateString), которая принимает строку в формате "YYYY-MM-DD" и возвращает возраст в годах.
// Напиши функцию formatDate(date, format), которая принимает объект Date и строку format. Формат может быть:
// "YYYY-MM-DD": должен вернуть дату в формате "год-месяц-день".
// "MM/DD/YYYY": должен вернуть дату в формате "месяц/день/год".

function calculateAge(birthdateString){
  let date = new Date(birthdateString)
  let diff = (new Date() - date)
  let zeroDate = new Date(diff)
  return zeroDate.getFullYear() - new Date(0).getFullYear()
}
const age = calculateAge("1990-04-30");
console.log(age); // должно быть 34 (если текущая дата 2024-04-29)
const date = new Date("1990-04-30");
const formattedDate1 = formatDate(date, "YYYY-MM-DD");
const formattedDate2 = formatDate(date, "MM/DD/YYYY");

console.log(formattedDate1); // должно быть "1990-04-30"
console.log(formattedDate2); // должно быть "04/30/1990"
function formatDate(date, format){
  if(format === "YYYY-MM-DD"){
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }else if (format === "MM/DD/YYYY"){
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }
  
}