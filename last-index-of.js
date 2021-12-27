function lastIndexOf(array, value) {
  let result;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array.length > 0 && value === array[i]) {
      result = i;
      return result;
    } else if (array.length > 0 && i === 0 && array[0] !== value) {
      result = -1;
      return result;
    }
  }

  if (array.length === 0) {
    let result = -1;
    return result;
  }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
