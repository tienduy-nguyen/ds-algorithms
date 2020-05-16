bbSort = (arr) =>{
    if(arr.length <=1) return arr;
    for(let i = 0; i<arr.length; ++i){
        for(let j = 0; j<arr.length-i-1; ++j){
            if(arr[j]>arr[j+1]) {
                [arr[j], arr[j+1]]  = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let arr = [6,5,4,3,2,1]
console.log(bbSort(arr))

const Sorting ={
    bbSort,
}
module.exports = Sorting;