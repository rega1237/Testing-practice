//const stringLength = require('./index.js');
//const reverseString = require('./index.js')
//const calculator = require('./index.js');
const capitalLetter = require('./index.js');


/*test('String length less or equal to 10 and greater than 0', () => {
  expect(stringLength('1234567891')).toBe('on range');
});*/

/*test('String reverse', () => {
  expect(reverseString('hello')).toBe('olleh');
})*/

/*describe('sum 2 numbers', () => {
  test('2 plus 2', () => {
    const newCalculator = new calculator(2,2);
    expect(newCalculator.add()).toBe(4);
  })

  test('3 plus 2', () => {
    const newCalculator = new calculator(3,2);
    expect(newCalculator.add()).toBe(5);
  })

  test('5 plus 5', () => {
    const newCalculator = new calculator(5,5);
    expect(newCalculator.add(5,5)).toBe(10);
  })
})

describe('subtract 2 numbers', () => {
  test('2 minus 2', () => {
    const newCalculator = new calculator(2,2);
    expect(newCalculator.subtract()).toBe(0);
  })

  test('10 minus 8', () => {
    const newCalculator = new calculator(10,8);
    expect(newCalculator.subtract()).toBe(2);
  })

  test('50 minus 25', () => {
    const newCalculator = new calculator(50,25);
    expect(newCalculator.subtract()).toBe(25);
  })
});

describe('divide 2 numbers', () => {
  test('2 / 2', () => {
    const newCalculator = new calculator(2,2);
    expect(newCalculator.divide()).toBe(1);
  })

  test('14 / 7', () => {
    const newCalculator = new calculator(14,7);
    expect(newCalculator.divide()).toBe(2);
  })

  test('9 / 3', () => {
    const newCalculator = new calculator(9,3);
    expect(newCalculator.divide()).toBe(3);
  })
});

describe('multiply 2 numbers', () => {
  test('2 * 2', () => {
    const newCalculator = new calculator(2,2);
    expect(newCalculator.multiply()).toBe(4);
  })

  test('14 * 7', () => {
    const newCalculator = new calculator(14,7);
    expect(newCalculator.multiply()).toBe(98);
  })

  test('9 * 3', () => {
    const newCalculator = new calculator(9,3);
    expect(newCalculator.multiply()).toBe(27);
  })
});*/


test('first uppercase', () => {
  expect(capitalLetter('Hello')).toBe(true);
})