//Взял с MDN
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getStringValidLength(string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
}

getRandomIntInclusive(1, 100);

getStringValidLength('Кекстограм', 140);
