let mergeSort = (arr) =>{
    if(arr.length <=1) return arr;
    let middle = Math.floor(arr.length/2);
    let right  = [...arr];
    let left = right.splice(0, middle);

    return merge(mergeSort(left), mergeSort(right));
}

let merge = (leftArr, rightArr) =>{
    let result = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] < rightArr[0]){
            result.push(leftArr.shift())
        } else{
            result.push(rightArr.shift())
        }
    }
    return result.concat(leftArr, rightArr);
}

const arr = [13,45,2,3,2,2,5,2,669,2,5,25,-8,-2,2,69];
console.log(mergeSort(arr))