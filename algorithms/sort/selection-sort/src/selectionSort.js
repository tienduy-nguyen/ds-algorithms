selectionSort = (arr) =>{
    if(arr.length<= 1) return arr;
    let indexMin;
    for(let i = 0; i<arr.length; ++i){
        indexMin = i;
        for(let j = i+1; j<arr.length; ++j){
            if(arr[j] < arr[indexMin]){
                indexMin = j;
            }
        }
        [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
    return arr;
}

let arr = [8,6,5,3,9,4,2,3,1,8,25];
console.log(selectionSort(arr))

const Sorting = {
    selectionSort
}

module.exports = Sorting;