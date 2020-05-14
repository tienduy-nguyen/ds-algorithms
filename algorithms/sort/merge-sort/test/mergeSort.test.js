const Sorting = require('../src/mergeSort');

it('Input : [1]', () =>{
    expect(Sorting.mergeSort([1])).toEqual([1]);
})
it('Input : [23,52,1,3,5,8,2]', () =>{
    expect(Sorting.mergeSort([23,52,1,3,5,8,2])).toEqual([1,2,3,5,8,23,52]);
})