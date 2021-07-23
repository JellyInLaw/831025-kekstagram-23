const getUniqueArray = function (arr) {
  const result = [];
  for (const str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};

const shuffle = function (arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (firstNumber, secondNumber) {
  const lower = Math.ceil(Math.min(Math.abs(firstNumber), Math.abs(secondNumber)));
  const upper = Math.floor(Math.max(Math.abs(firstNumber), Math.abs(secondNumber)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Взял с MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function checkStringLength (string, length) {
  return string.length <= length;
}

const isEsc = function (evt) {
  if (evt.keyCode === 27) {
    return true;
  }
};

export {
  getUniqueArray,
  shuffle,
  getRandomPositiveInteger,
  getRandomIntInclusive,
  checkStringLength,
  isEsc
};
