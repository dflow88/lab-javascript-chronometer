const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let parar = null;

function printTime() {
  // ... your code goes here
  chronometer.start();

  parar = setInterval(() => {
    const seconds = printSeconds();
    const minutes = printMinutes();
    const miliseconds = printMiliseconds()
    minDecElement.innerHTML = minutes[0];
    minUniElement.innerHTML = minutes[1];
    secDecElement.innerHTML = seconds[0];
    secUniElement.innerHTML = seconds[1];
    milDecElement.innerHTML = miliseconds[0]
    milUniElement.innerHTML = miliseconds[1]
  }, 0);
}

function printMinutes() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMiliseconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getMiliseconds())
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li')
  li.innerText = chronometer.split()
  splitsElement.appendChild(li)
}
function clearSplits() {
  // ... your code goes here
  
  while (splitsElement.lastElementChild) {
    splitsElement.removeChild(splitsElement.lastElementChild);
  }
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();

    printTime();
  } else if (btnLeftElement.innerHTML === 'STOP') {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
    clearInterval(parar);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here}
  if (btnRightElement.innerHTML === 'RESET') {
    setStartBtn();
    clearSplits()
    chronometer.reset()
    minDecElement.innerHTML = 0
    minUniElement.innerHTML = 0
    secDecElement.innerHTML = 0
    secUniElement.innerHTML = 0
    milDecElement.innerHTML = 0
    milUniElement.innerHTML = 0
  } else if (btnRightElement.innerHTML === 'SPLIT') 
    printSplit()
});
