const { arrayToStringDemo } = require('./arrayToString.js');

describe('arrayToStringDemo function', () => {

  test('returns correct string representations of the array', () => {
    const result = arrayToStringDemo();

    expect(result).toEqual({
      toString: "Red,Green,White,Black",
      joinWithComma: "Red,Green,White,Black",
      joinWithoutSpace: "RedGreenWhiteBlack"
    });
  });

  test('does not modify the original array', () => {
    const result1 = arrayToStringDemo();
    const result2 = arrayToStringDemo();
    expect(result1).toEqual(result2);
  });

});
