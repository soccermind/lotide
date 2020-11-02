const middle = function(array) {
  let output = [];
  let refPoint = Math.floor(array.length / 2);
  if (array.length < 3) {
    return output;
  } else if (array.length % 2 > 0) {
    output.push(array[refPoint]);
  } else {
    output.push(array[refPoint - 1]);
    output.push(array[refPoint]);
  }
  return output;
};

module.exports = middle;