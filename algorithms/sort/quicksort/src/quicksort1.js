quicksSrt = (arr) => {
  if (arr.length <= 1) return arr;
  let indexPivot = Math.floor((0 + arr.length - 1) / 2);
  let pivot = arr.splice(indexPivot, 1);
  let arrLess = [];
  let arrGreeter = [];

  for (i = 0; i < arr.length; ++i) {
    if (arr[i] <= pivot) arrLess.push(arr[i]);
    if (arr[i] > pivot) arrGreeter.push(arr[i]);
  }
  return [].concat(quickSort(arrLess), pivot, quickSort(arrGreeter));
};

// const ex1 = [10,28,32,23,20,1,2,589,35,20,47,23,56,12,34,11,1,6,9,3,5,7,15];
// console.log(quickSort(ex1))

const Sorting = {
  quickSort,
};

module.exports = Sorting;
