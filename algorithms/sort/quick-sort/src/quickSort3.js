//https://viblo.asia/p/tim-hieu-thuat-toan-quick-sort-1VgZv0Ar5Aw

let quickSort = (arr) =>{
    if(arr.length <= 1) return arr;
    let high = arr.length -1;
    let pivot  = arr.splice(high,1);
    let arrLeft = [];
    let arrRight = [];
    for(let i= 0; i<arr.length; ++i){
        let current = arr[i];
        if(arr[i] <= pivot) {
            arrLeft.push(current);
        } else{
            arrRight.push(current);
        };               
    }
    return [].concat(quickSort(arrLeft),pivot,quickSort(arrRight));
}

let arr = [13,5,.3,-5,-22,56,3]
console.log(quickSort(arr));