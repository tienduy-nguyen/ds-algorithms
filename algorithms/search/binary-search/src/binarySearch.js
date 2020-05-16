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



// Time complexity
// Methods on a BST always start at the root node and work their way down, due to this, 
// the maximum time each operation takes is based on how high the tree is. 
// For example a tree with n nodes where there are no right children will take O(n) time, 
// a complete BST however (every level except the last is completely filled,
// with nodes on the last as left as possible) has the worst case time of O(logn).
// delete: Linear — O(n), or O(log n) in average case
// insert: Linear — O(n), or O(log n) in average case
// contains: Linear — O(n), or O(log n) in average case
// depthFirstLog: Linear — O(n), or O(log n) in average case
