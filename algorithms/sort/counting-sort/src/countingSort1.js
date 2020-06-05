countingSort = (array, min, max) => {
    let index = 0;
    const count = [];

    // Mảng count với max phần tử và được gán giá trị là 0 tại mỗi vị trí 
    for (let i = min; i <= max; i++) {
        console.log('---------------Initial count----------------')
        count[i] = 0;
        console.log(`Count[${i}]: 0`)
    }
    console.log('count1', count)

    // Đếm số lượng đối tượng có cùng giá trị và lưu kết quả vào mảng count
    for (let i=0; i < array.length; i++) {
        console.log('---------------for dem so luot xuat hien----------------')
        console.log(`Array[${i}] : count[${array[i]}]`)
        count[array[i]]++;
    }
    console.log('count2', count)

    
    // Thay đổi giá trị của mảng count và return ra mảng đã sx
    for (let i = min; i <= max; i++) {
        console.log('---------------for loop----------------')
        console.log('i = ',i)
        while (count[i] > 0) {
            console.log('count i = ',count[i])
            console.log(`'i - index : '${i} - ${index} `)
            array[index] = i; 
            console.log(`Array[${index}] = ${i}`)
            index++;
            count[i]--;
        }
    }
    console.log('array = ', array)
    
    return array;
}

const array = [4, 10, 3,3, 15,4,4,5, 15,10,3,5];

const min = Math.min(...array) // lấy giá trị thấp nhất trong mảng
const max = Math.max(...array) // lấy giá trị cao nhất trong mảng
countingSort(array, min, max)