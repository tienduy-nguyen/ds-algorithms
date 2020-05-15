const Search = require('../src/interpolationSearch');

it('Test 1', () =>{
    expect(Search.interpolationSearch([1,1,2,6,8,9,23,65], 5)).toBe(-1);
})
it('Test 2', () =>{
    expect(Search.interpolationSearch([1,1,2,6,8,9,23,65], -5)).toBe(-1);
})
it('Test 3', () =>{
    expect(Search.interpolationSearch([1,1,2,6,8,9,23,65], 9)).toBe(5);
})
it('Test 4', () =>{
    expect(Search.interpolationSearch([1,1,2,6,8,9,23,65], 1)).toBe(0);
})