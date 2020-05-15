//Input a array has been sorted

let interpolationSearch = (arr, search) =>{
    let upperBound = arr.length -1;
    let lowerBound = 0;

    while(lowerBound < upperBound  && arr[lowerBound]<=search){
        let middle = lowerBound + Math.floor((upperBound - lowerBound) * (search - arr[lowerBound]) / (arr[upperBound] - arr[lowerBound]));
        let valueMiddle = arr[middle];
        // console.log('-----------');
        // console.log(`Middle = ${middle}: ValueMiddle = ${valueMiddle}`)
        // console.log(`Lowwer = ${lowerBound}`)
        // console.log(`Upper = ${upperBound}`)

        if(search === valueMiddle){
            return middle;
        } else if(search > valueMiddle){
            lowerBound = middle +1;
        } else{
            upperBound = middle;
        }
    }
    return -1;
}

let arr = [0,2,2,5,5,23,56,85];
console.log(interpolationSearch(arr,1));


const Search = {
    interpolationSearch
}
module.exports = Search