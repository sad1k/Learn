try {
  const obj = {
    a: "1",
    b: "3",
    d: "4",
    fun: toString,
  };
  let str = JSON.parse(obj);
  parseJson(str);
} catch (error) {
  console.log(`error catched ${error.message}`);
}

function parseJson(jsonStr) {
  if (jsonStr.length >= 30) {
    throw new Error("max length of str less than 30");
  }
  return JSON.parse(jsonStr);
}

async function abc() {
  await new Promise((res) => {
    setTimeout(() => res("1"), 100);
  });

  throw new Error("lol");
}
try {
  abc();
} catch (error) {
  console.log(`is catched error?`);
}

let count = 0;
try {
  try {
    throw new Error("123");
    throw new Error("123");
  } catch (error) {
    throw new Error("444");
  }
} catch (error) {
  console.log(error.message);
  count += 1;
}

console.log(count);

try {
  throw 123;
} catch (error) {
  console.log(error);
}



try {
  
  llalasladla

} catch (error) {
  console.log(error)
}



try {
  {{{
} catch (error) {
  console.log(error)
}

try {
  throw new Error('123')
} catch {
  console.log('works')
}


function cool(){
  try {
    return 123
  } catch (error) {
    
  }finally{
    console.log('before return')
  }
}

cool()