//We need sort array before search
//https://viblo.asia/p/cau-truc-du-lieu-va-giai-thuat-search-924lJYzWZPM


let binarySeach = (arr,search) =>{
    let upperBound = arr.length-1;
    let lowerBound = 0;
    while(lowerBound < upperBound ){
        let middle = lowerBound + Math.round((upperBound  - lowerBound)/2);
        let current = arr[middle];
        if(current = search ){
            return middle;
        } else if(current > search){
            upperBound = middle;
        } else{
            lowerBound = middle + 1.
        }
    }
    return -1;
}

let arr = [0,2,4,6,8,10];
console.log(binarySeach(arr,6))

const Search = {
    binarySeach
}

module.exports = Search
