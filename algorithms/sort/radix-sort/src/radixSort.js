//Source to understand radix sort
//https://viblo.asia/p/tim-hieu-ve-radix-sort-va-cach-implement-thuat-toan-nay-trong-swift-E375zk0PKGW
//https://gist.github.com/StBean/4af58d09021899f14dfa585df6c86df6

/* A Queue based datastructure for implementing our radix algorithm.
Sorting will modify the existing input data and return the sorted data */
function Queue(){      
    this.dataStore = [];
    this.enqueue   = enqueue;
    this.dequeue   = dequeue;
    this.isEmpty   = isEmpty;
};
function enqueue(element){
    this.dataStore.push(element);
};
function dequeue(){
    if(this.dataStore.length == 0){
      return false;
    } else {
      return this.dataStore.shift();
    }
};
function isEmpty(){
    if(this.dataStore.length == 0){
      return true;
    } else {
      return false;
    }
}; 

let radixSort = (arr) =>{
    if(arr.length <= 1) return arr;
    let bin  = []; //Used to hold our array of queues
    let digIndex = []; //This will be used to hold mapping values for remapping data elements to theirs proper index location


    let max = Math.max(...arr);
    let time = 0;
    while (Math.floor(max) > 0){
        ++time;
        max /= 10;
    }

   
}
radixSort([1,20])
