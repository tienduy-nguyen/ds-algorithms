function partition(arr, left, right) {
  let middle = Math.floor((right + left) / 2);
  let pivot = arr[middle];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // ES6 destructuring swap
      i++;
      j--;
    }
  }
  return i;
}

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    let index = partition(arr, left, right);
    if (left < index - 1) quicksort(arr, left, index - 1);
    if (index < right)quicksort(arr, index, right);
  }
 return arr;
}

const Quicksort = {
  quicksort,
};
module.exports = Quicksort;