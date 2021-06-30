class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start() {
    const contar = () => {
    this.currentTime ++;
    }
    this.intervalId= setInterval (contar,10)
  }

  
  getMinutes() {
    let minutes = 0
    if (this.currentTime >= 6000) {
      minutes = (this.currentTime - (this.currentTime % 6000)) / 6000
    }
    return minutes
  }
  getSeconds() {

    if(this.currentTime < 6000) {
      return Math.floor(this.currentTime/100)
    } else {
      return this.currentTime % 6000
    }
  }

  getMiliseconds() {
      return this.currentTime % 100
  }
  
  computeTwoDigitNumber(value) {
    let number = '';
    if (value < 10)  {
      number = "0" + value
    }
    else {
      number = `${value}`
    }
    return number
  }
  stop() {
    return clearInterval(this.intervalId)
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
   return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())+ ":" + this.computeTwoDigitNumber(this.getMiliseconds());
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}