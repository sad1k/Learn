// Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json") // (3)
  .catch(alert); // Error: 404

// solution here

async function loadJson(url) {
  const result = await fetch(url);
  if (result.status == 200) {
    return result.json();
  } else {
    throw new Error(result.status);
  }
}

// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Полное имя: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

// solution here

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  const result = await fetch(url);
  if (result.status == 200) {
    return result.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Полное имя: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}



// Вызовите async–функцию из "обычной"
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
  wait().then(result => console.log(result));
}
// P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.
f()