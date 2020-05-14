const SelectionSort = require('../src/selection-sort');

it('Input = [10]', () => {
    expect(SelectionSort.selectionSort([10])).toEqual([10]);
});
it('Input  = [565,828,2,15,3,8]', () =>{
    expect(SelectionSort.selectionSort([565,828,2,15,3,8])).toEqual([2,3,8,15,565,828]);
})