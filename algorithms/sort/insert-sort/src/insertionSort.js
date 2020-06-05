insertionSort = (arr) => {
  if (arr.length <= 1) return arr;
  let value;
  for (let i = 1; i < arr.length; ++i) {
    value = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j];
      --j;
    }
    arr[j + 1] = value;// last
  }

  return arr;
}

let arr = [13,14,46,1,7,2,7,22]
console.log(insertionSort(arr))

const Sorting = {
    insertionSort
  }
  
module.exports = Sorting;


// Name	            Best	Average	Worst	Memory	Stable	Comments
// Insertion sort	  n	    n2	    n2	  1	      Yes	