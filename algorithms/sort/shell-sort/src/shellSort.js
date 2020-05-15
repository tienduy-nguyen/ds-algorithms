// Shell sort is an additional algrorithm for insertion sort
// It devided an array to multiples gaps and compare them together 
// Explanification on: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort

//use this insertion sort when working with shell sort
insertionSortGap = (arr,start, gap) =>{
    if(arr.length <=1) return arr;
    let j = start;
    let value;
    for(let i = start+gap; i<(arr.length); i +=gap){
        value = arr[i];
        j = i-gap;
        while(j>=start & arr[j]>value){
            arr[j+gap] = arr[j];
            j -= gap;
        }
        arr[j+gap] = value;
    }
}

shellSort = (arr) =>{
    if(arr.length <=1) return arr;
    let gap = Math.floor(arr.length/2);
    while(gap >= 1){
        for(let i = 0; i<gap; ++i){
            insertionSortGap(arr, i,gap);
        }
        gap = Math.floor(gap/2)
    }
    return arr;
}

let arr= [121,3,5,3,46,8,30,12,1,2,3,9533,2,-53,-1];
console.log(shellSort(arr));

const Sorting = {
    shellSort
}

module.exports  = Sorting;

