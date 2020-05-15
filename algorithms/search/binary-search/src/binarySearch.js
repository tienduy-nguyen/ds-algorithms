//We need sort array before search
//https://viblo.asia/p/cau-truc-du-lieu-va-giai-thuat-search-924lJYzWZPM


let binarySeach = (arr,search) =>{
    let upperBound = arr.length-1;
    let lowerBound = 0;
    while(lowerBound < upperBound ){
        let middle = Math.floor(lowerBound + (upperBound  - lowerBound)/2);
        let valueMiddle = arr[middle];
        // console.log('-----------');
        // console.log(`Middle = ${middle}: ValueMiddle = ${valueMiddle}`)
        // console.log(`Lowwer = ${lowerBound}`)
        // console.log(`Upper = ${upperBound}`)
        if(valueMiddle === search ){
            return middle;
        } else if(valueMiddle > search){
            upperBound = middle;
        } else{
            lowerBound = middle + 1.
        }
    }
    return -1;
}

let arr = [0,2,4,6,8,10];
console.log(binarySeach(arr,0))

const Search = {
    binarySeach
}

module.exports = Search
