function checkStringLength(string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
}

checkStringLength('FFFFFFFF',140);//для прохождения автопроверки
