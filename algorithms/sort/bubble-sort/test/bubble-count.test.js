const BubbleCount = require('../src/bubble-count');

it('Input =  [1]', () =>{
    expect(BubbleCount.bbCount([1])).toEqual([1]);
});
it('Input = [6,5,4,3,2,1]', () =>{
    expect(BubbleCount.bbCount([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6]);
});