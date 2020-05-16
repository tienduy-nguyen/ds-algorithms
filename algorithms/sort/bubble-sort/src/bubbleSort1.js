let bubbleSort = (arr) =>{
    if(arr.length <= 1) return arr;
    for(let i = 0; i<arr.length; ++i){
        for(let j = 0 ; j<arr.length-1-i; ++j){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [6,5,40,-3,80,1]
console.log(bubbleSort(arr))