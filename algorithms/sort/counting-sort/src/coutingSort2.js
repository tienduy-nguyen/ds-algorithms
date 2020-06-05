let countingSort = (arr) =>{
    if(arr.length <= 1) return arr;
    let count = [];
    let index;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for(let i = min; i<=max; ++i){
        count[i] = O;
    }
    for(let i = 0; i<arr.length; ++i){
        ++count[arr[i]];
    }
    for(let i=min; i<=max; ++i){
        while(count[i]>0){
            arr[index] = i;
            ++index;
            --count[i];
        }
    }
    return arr;

}
let arr = [13,31,36,3,1,69,6,-58,-5,-3,4,7,73,16]
console.log(countingSort(arr))