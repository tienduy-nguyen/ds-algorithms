//Source to understand radix sort
//https://viblo.asia/p/tim-hieu-ve-radix-sort-va-cach-implement-thuat-toan-nay-trong-swift-E375zk0PKGW

//Helper function
//Return the digit in num at the given place value
let getDigit = (num, i)=>{
  return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

//Return the number of digit in num
let digitCount = (num) =>{
  if(num === 0) return 1;
  return Math.floor(Math.log10(num))+1;
}

//Given an array of number, returns the number of digits in the largest numbers in the list
let mostDigits = (nums) =>{
  return digitCount(Math.max(...nums));
}

//Sort array
let radixSort = (nums) =>{
  let maxDigits = mostDigits(nums);
  for(let k=0; k<maxDigits; ++k){
    let digitBuckets = Array.from({length: 10}, ()=>[]);
    for(let i=0; i<nums.length; ++i){
      let digit = getDigit(nums[i],k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets)
  }
  return nums;
}
console.log(radixSort([50,132,2,37898995,2246882,2233,253,64789,4666]));