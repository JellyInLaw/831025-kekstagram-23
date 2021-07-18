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

export {getUniqueArray,shuffle};
