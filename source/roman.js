'use strict';

const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanum = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

function fromRoman(str) {
  let result = 0;
  decimal.forEach(function(currentValue, index) {
    while (str.indexOf(romanum[index]) === 0) {
        result += currentValue;
        str = str.replace(romanum[index], '');
      }
  });
  return result;
}

function toRoman(num) {
  if (num > 4999) {
    throw new TypeError('Number is too big.')
  }
  if (num < 1) {
    throw new TypeError('Roman numerals cannot be negative.')
  }
  let result = '';
  for (let i = 0; i<=decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += romanum[i];
      num -= decimal[i];
    }
  }
  return result;
}

function isRoman(str) {
  let allowedLetters = /[^M,C,D,L,X,V,I]/g;
  let result = str.match(allowedLetters);
  return !result;
}

function roman(data) {
  if (typeof data !== 'string' && typeof data !== 'number') {
    throw new TypeError('Incorrect argument.');
  }
  let result;
  if (typeof data === 'string' ) {
    data = data.toUpperCase();
    if (!isNaN(+data)) {
      result = toRoman(data)
    }
    else if (isRoman(data)) {
      result = fromRoman(data)
    }
    else {
      throw new TypeError('Incorrect argument.')
    }
  }
  else if (typeof data === 'number') {
    if (isNaN(data)) {
      throw new TypeError('Incorrect argument.')
    }
    result = toRoman(data)
  }
  return result;
}