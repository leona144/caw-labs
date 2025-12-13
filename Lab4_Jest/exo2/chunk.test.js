const chunk = require('./chunk');
describe('chunk function', () => {

  test('splits an array of 10 elements into chunks of size 2', () => {
    const result = chunk([1,2,3,4,5,6,7,8,9,10], 2);
    expect(result).toEqual([
      [1,2],
      [3,4],
      [5,6],
      [7,8],
      [9,10],
    ]);
  });

  test('splits an array whose length is not divisible by size', () => {
    const result = chunk([1,2,3,4,5], 2);
    expect(result).toEqual([
      [1,2],
      [3,4],
      [5],
    ]);
  });

  test('returns an empty array when given an empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('size larger than array length returns the whole array as one chunk', () => {
    expect(chunk([1,2,3], 10)).toEqual([[1,2,3]]);
  });

  test('works with strings or other types', () => {
    expect(chunk(['a','b','c','d'], 2)).toEqual([
      ['a','b'],
      ['c','d']
    ]);
  });

});
