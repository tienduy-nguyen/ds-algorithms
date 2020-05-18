//Write a function called maxSubArraySum which accepts
//an array of integers and a number called n.
//The function should calculate the maximuon sum of n consecutive elements in the array.

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; ++i) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; ++i) {
    tempSum = maxSum - arr[i - 1] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 5, 6, 10, 3, 6, -12, 9, 9, 2, 3, 9], 3));
