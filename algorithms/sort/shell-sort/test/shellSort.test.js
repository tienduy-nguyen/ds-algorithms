const Sorting = require('../src/shellSort');

it('Test1', () =>{
    expect(Sorting.shellSort([23,546,25,21,4,5,-8,26,26,4])).toEqual([-8,4,4,5,21,23,25,26,26,546]);
})

it('Test2', ()=>{
    expect(Sorting.shellSort([9,8,7,6,5,4,3,2,1,0])).toEqual([0,1,2,3,4,5,6,7,8,9]);
})