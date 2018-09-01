'use strict';

function fromRoman(str) {  
    let result = 0;
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    for (let i = 0; i <= decimal.length; i++) {
      while (str.indexOf(roman[i]) === 0) {
        result += decimal[i];
        str = str.replace(roman[i], '');
      }
    }
    return result;
  }

function toRoman(num) {  
  if (num > 4999) {throw new TypeError('Number is too big.')}
  if (num < 1) {throw new TypeError('Roman numerals cannot be negative.')}
  let result = '';
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (let i = 0; i<=decimal.length; i++) {
    while (num % decimal[i] < num) {     
      result += roman[i];
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
  let type = typeof data;
  if (typeof data !== 'string' && typeof data !== 'number') {
    throw new TypeError('Incorrect argument.');
  }
  if (typeof data === 'string' ) {
    data = data.toUpperCase();
    if (!isNaN(+data)) {
      return toRoman(data);
    }
    if (isRoman(data)) {
      return fromRoman(data); 
    }
    else {throw new TypeError('Incorrect argument.')}
  }
  else if (typeof data === 'number') {
    if (isNaN(data)) {throw new TypeError('Incorrect argument.')}
    return toRoman(data);
  }
}