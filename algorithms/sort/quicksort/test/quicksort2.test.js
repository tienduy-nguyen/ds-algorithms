const Quicksort = require('../src/quicksort2')

it('Sort array []', () =>{
    const arr = [];
    let result = Quicksort.quicksort(arr);
    const resultExpected = [];
    expect(result).toEqual(resultExpected);
});
it('Sort array [10]', () =>{
    const arr = [10];
    let result = Quicksort.quicksort(arr);
    const resultExpected = [10];
    expect(result).toEqual(resultExpected);
});

it('Sort array [10,2,1,3,20,10,3]', () =>{
    const arr = [10,2,1,3,20,10,3];
    let result = Quicksort.quicksort(arr);
    const resultExpected = [1,2,3,3,10,10,20];
    expect(result).toEqual(resultExpected);
});
it('Sort array [1,2,3,10,2,1,3,20,10,3]', () =>{
    const arr = [1,2,3,10,2,1,3,20,10,3];
    let result = Quicksort.quicksort(arr);
    const resultExpected = [1,1,2,2,3,3,3,10,10,20];
    expect(result).toEqual(resultExpected);
});