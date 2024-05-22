let startBtn = document.getElementById("start");
let pause = document.getElementById("stop");
pause.disabled = true;
let reset = document.getElementById("reset");
reset.disabled = true;
let span = document.getElementById("timer");
let i = 0;
let timerId = null;
let prevHours = 0
let prevMin = 0
let prevSec = 0
let hours = 0
let minutes = 0
let seconds = 0
const func = () =>  {
  let start = Date.now();
  timerId = setInterval(() => {
    let diff = Date.now() - start
    hours = (Math.floor(diff/(1000*60*60)) + prevHours) % 24
    minutes = (Math.floor(diff/(1000*60)) + prevMin) % 60
    seconds = (Math.floor((diff)/(1000)) + prevSec) % 60
    span.innerHTML = `Прошло времени: ${hours} : ${minutes} : ${seconds}`
    
  }, 0);
  startBtn.disabled = true;
  pause.disabled = false;
}
start.addEventListener("click", func);

pause.onclick = () => {
  if (timerId) {
    prevSec = seconds
    prevMin = minutes
    prevHours = hours
    clearInterval(timerId);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = false;
  }
};

reset.onclick = () => {
  if (timerId) {
    clearInterval(timerId);
    start.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
    span.innerHTML = "";
    prevHours = 0
    prevMin = 0
    prevSec = 0
  }
};

let input = document.getElementById("input");

input.addEventListener("click", function () {
  // пример с потерей this в setInterval и setTimeout всегда в колбеке  this = window, если не стрелка
  const self = this;
  let timerId = setInterval(function () {
    console.log(self.value);
    clearInterval(timerId);
  }, 100);
});
