//**********Multi Pointer pattern******************//

//Implement a function called countUniqueValues
//which accespts a sorted array, and counts the unique values in the array
//There can be negative numbers in the array
//but it will always be sorted

function countUniqueValue(arr) {
  let set = new Set(arr);
  return set.size;
}

function countUniqueValue1(arr) {
  if (arr.length <= 1) return arr.length;
  let count = 1;
  let prev = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] != prev) {
      count++;
      prev = arr[i];
    }
  }
  return count;
}

console.log(countUniqueValue([1, 1, 1, 2, 3]));
console.log(countUniqueValue([-10, 1, 2, 2, 3]));
console.log(countUniqueValue([]));
console.log(countUniqueValue([1, 1]));
console.log(countUniqueValue1([1, 1, 1, 2, 3]));
console.log(countUniqueValue1([-10, 1, 2, 2, 3]));
console.log(countUniqueValue1([]));
console.log(countUniqueValue1([1, 1]));
