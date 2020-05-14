const Sorting = require('../src/countingSort');

it('Input = []', () =>{
    expect(Sorting.countingSort([])).toEqual([]);
})

it('Input = [2]', () =>{
    expect(Sorting.countingSort([2])).toEqual([2]);
})

it('Input = [12,323,4654,21,4,3,46,7,2,2,2,79]', () =>{
    expect(Sorting.countingSort([12,323,4654,21,4,3,46,7,2,2,2,79]))
    .toEqual([2, 2, 2, 3, 4, 7, 12, 21, 46, 79, 323, 4654])
})
it('Input = [9,8,7,6,2,2,5,4,3,9,4,3,1]', () =>{
    expect(Sorting.countingSort([9,8,7,6,2,2,5,4,3,9,4,3,1]))
    .toEqual([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 9])
})