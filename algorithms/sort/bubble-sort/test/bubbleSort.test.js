const Sorting = require('../src/bubbleSort');

it('Input =  [1]', () =>{
    expect(Sorting.bbSort([1])).toEqual([1]);
});
it('Input = [6,5,4,3,2,1]', () =>{
    expect(Sorting.bbSort([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6]);
});