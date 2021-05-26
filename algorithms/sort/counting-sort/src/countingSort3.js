function countingSort(arr) {
  let index = 0;
  const count = [];
  const min = Math.max(...arr);
  const max = Math.max(...arr);

  // create an array with index from min to max of original arr and set value  = 0
  for (let i = min; i <= max; ++i) count[i] = 0;

  // count & increase arr value to  count array
  for (let i = 0; i < arr.length; ++i) count[arr[i]]++;

  // get new sorted array
  for (let i = min; i <= max; ++i) {
    while (count[i] > 0) {
      arr[index] = i;
      index++;
      count[i]--;
    }
  }

  return arr;
}
