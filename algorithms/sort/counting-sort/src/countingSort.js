//https://viblo.asia/p/tim-hieu-thuat-toan-counting-sort-aWj537dG56m
countingSort = (arr) =>{
    if(arr.length <=1) return arr;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    let index = 0;
    let count = [];

    //Khoi tao mang cao tu min toi max va dat gia tri cua no la 0
    for(let i = min; i<=max; ++i){
        count[i] = 0;
    }
    //Ta se di dem so lan xuat hien cua cac gia tri trong mang Input
    for(let i = 0; i< arr.length; ++i){
        ++count[arr[i]];
        //Chi so cua mang count luc nay la gia tri cua mang input
    }

    //Bay h ta xet tu min de max, 
    //neu cac gia tri trung voi cac gia tri nay thi ta se ghi ra mang moi de thanh mang da sap xep
    for( let i = min; i<=max; ++i){
        //tai i neu count[i] >0, tuc la trong mang input co ton tai gia tri nay
        while(count[i] >0){
            arr[index]  = i;
            ++index;
            --count[i];
        }
    }
    return arr;

}

let arr = [9,8,7,6,2,2,5,4,3,9,4,3,1];
console.log(countingSort(arr))



const Sorting = {
    countingSort,
}

module.exports = Sorting;