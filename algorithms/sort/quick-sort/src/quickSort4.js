function quickSort(arr) {
  const len = arr.length;
  if (len < 1) return arr;
  const mid = Math.floor(len / 2);
  const pivot = arr.splice(mid, 1);

  const left = [],
    right = [];

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...left, ...pivot, ...right];
}

let arr = [13, 5, 0.3, -5, -22, 56, 3];
console.log(quickSort(arr));
