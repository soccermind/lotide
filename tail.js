const tail = function(arr) {
  let newArr = arr.slice();
  newArr.shift();
  return newArr;
};

module.exports = tail;