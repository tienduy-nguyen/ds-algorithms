const Search = require('../src/binarySearch');

it('Test 1', ()=>{
    expect(Search.binarySeach([1,3,5,6,14,25,36,78,93], 0)).toBe(-1);
})

it('Test 2', ()=>{
    expect(Search.binarySeach([1,3,5,6,14,25,36,78,93], 14)).toBe(4);
})