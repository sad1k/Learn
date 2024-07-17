// Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными?
// Другими словами, ведут ли они себя одинаково во всех обстоятельствах,
// для всех переданных им обработчиков?

promise.then(f1).catch(f2);
// Против:

promise.then(f1, f2);

// нет, ошибка в then отслеживается последующим кечем, а если передать две функции,
// то он отслеживает только ошибку в экзекутере промиса

// Переписываем каллбек хэллы на промисы чейнинги

// Задача 1: Последовательные операции с задержкой
// Описание:
// Необходимо выполнить три асинхронные задачи последовательно.
// Каждая задача должна выполняться с задержкой в 1 секунду, после чего должна запускаться следующая задача.
// Когда все задачи завершены, нужно вывести сообщение о завершении всех задач.

// Условия:

// Задача 1 выполняется с задержкой 1 секунда.
// Задача 2 выполняется с задержкой 1 секунда после завершения задачи 1.
// Задача 3 выполняется с задержкой 1 секунда после завершения задачи 2.
// Вывести сообщение о завершении всех задач после выполнения задачи 3.

let task = new Promise((res) => {
  setTimeout(() => {
    console.log("task1 complete");
    res();
  }, 1000);
});

task
  .then(() => {
    return new Promise((res) => {
      setTimeout(() => {
        console.log("task2 complete");
        res();
      }, 1000);
    });
  })
  .then(() => {
    return new Promise((res) => {
      setTimeout(() => {
        console.log("task3 complete");
        res();
      }, 1000);
    });
  });
// Задача 2: Чтение файлов последовательно
// Описание:
// Необходимо прочитать три файла последовательно. Сначала читается первый файл, после его прочтения начинается чтение второго файла, затем третьего. Когда все файлы будут прочитаны, нужно вывести сообщение о завершении чтения всех файлов.

// Условия:

// Прочитать файл file1.txt.
// Прочитать файл file2.txt после завершения чтения file1.txt.
// Прочитать файл file3.txt после завершения чтения file2.txt.
// Вывести сообщение о завершении чтения всех файлов после чтения file3.txt.

function readFile(name) {
  return new Promise((resolve) => {
    let reader = new FileReader();

    reader.readAsText(name);

    reader.onload = () => resolve(reader.result);
  });
}

readFile("file1.txt")
  .then((val) => {
    console.log("file1.txt complete result:" + ` ${val}`);

    return readFile("file2.txt");
  })
  .then((val) => {
    console.log("file2.txt complete result:" + ` ${val}`);

    return readFile("file3.txt");
  })
  .then((val) => {
    console.log("file3.txt complete result:" + ` ${val}`);
  });

let example = new Promise((res, rej) => {
  res(123);
})
  .then((val) => val)
  .catch((val) => console.log(val))

  .then(
    (val) => {
      throw new Error("lol");
    },
    () => {
      console.log('1233')
      throw new Error("lol");
    }
  )
  .catch((val) => console.log("123"))
  .finally(() => console.log("finaly"));
