let insertionSort = (arr) =>{
    if(arr.length<=1) return arr;
    for(let  i = 1; i<arr.length; ++i){
        let j = i-1;
        let value = arr[i];
        while(j>=0 && arr[j] > value){
            arr[j+1] = arr[j];
            --j;
        }
        arr[j+1] = value;
    }
}