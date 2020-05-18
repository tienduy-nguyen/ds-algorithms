//**********Multi Pointer pattern******************//

//Write a function called sumZero which accepts a sorted array of integers
//The function should find the first pair where the sum is O
//Return an array that included both values that sum to zero or undefined
//if a pair does not exist
//Ex: sumZero[-3,-2,1,2,0,3] ->return [-3,3] first pair
//sumZero[1,2,3] -> return undefined

//Naive method: uses 2 loop for, time complexity: O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return undefined;
}
//Refactor with other method
//Attention input is a sorted array of integers
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      --right;
    } else {
      ++left;
    }
  }
}

console.log(sumZero([-2, 1, 2, 3]));
console.log(sumZero([-10, -1, 1, 2, 3]));
console.log(sumZero2([-2, 1, 2, 3]));
console.log(sumZero2([-10, -1, 1, 2, 3]));
