function mergeSort(arr) {
  // Split array ultil length array =1
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length  / 2);
  let right = [...arr];
  let left = right.splice(0, middle);
  // console.log('*********************************')
  // console.log('left:', left)
  // console.log('right:', right)
  // console.log('*********************************')
  return merge(mergeSort(left), mergeSort(right));
}

// Merges 2 sorted arrays
function merge(left, right) {
  let result = [];
  // console.log('-----------------------------')
  // console.log('arrLeft:', left)
  // console.log('arrRight:', right)

  // In case if arrays are not of size 1.
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  console.log('arrResult:', result.concat(left).concat(right))
  return result.concat(left).concat(right);
  

}

let arr = [12, 35, 21, 1, 23, 3, 2, 4, 5, 13, 8, 9, 21];
console.log(mergeSort(arr));


const Sorting = {
  mergeSort
}

module.exports = Sorting;



// Complexity
// Name	Best	Average	Worst	Memory	Stable	Comments
// Merge sort	n log(n)	n log(n)	n log(n)	n	Yes	