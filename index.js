// Task #1

/*const stringLength = (string) => {
  const length = string.length;
  if (length <= 10 && length > 0) {
    'on range';
  }else {
    'not in range';
  }
}*/


// Task 2

/*const reverseString = (string) => {
  return string.split('').reverse().join('');
}*/


// Task 3

/*class calculator {
  constructor(numberOne, numberTwo) {
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }

  add = () => {
    return this.numberOne + this.numberTwo;
  }

  subtract = () => {
    return this.numberOne - this.numberTwo;
  }

  divide = () => {
    return this.numberOne / this.numberTwo;
  }

  multiply = () => {
    return this.numberOne * this.numberTwo;
  }
}*/

const capitalLetter = (string) => {
  if (string[0].toUpperCase() === string[0]) {
    return true
  }else {
    return false
  }
}
 
module.exports = capitalLetter;

