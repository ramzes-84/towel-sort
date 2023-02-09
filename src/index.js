
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];
  if (arguments.length === 0) result = [];
  else {
    for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) result.push(...matrix[i]);
    else result.push(...matrix[i].sort((a, b) => b - a ))
    }
  }
  return result
}