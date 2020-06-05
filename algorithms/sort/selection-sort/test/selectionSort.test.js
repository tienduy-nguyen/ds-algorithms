const Sorting = require('../src/selectionSort');

it('Input = [10]', () => {
    expect(Sorting.selectionSort([10])).toEqual([10]);
});
it('Input  = [565,828,2,15,3,8]', () =>{
    expect(Sorting.selectionSort([565,828,2,15,3,8])).toEqual([2,3,8,15,565,828]);
})