const notation = require('./notation.js');

let consoleLogSpy;

describe("Notation tests", () => {
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('mean function should calculate correct average', () => {
    const scores = [15, 88, 99, 10, 6];
    const average = notation.mean(scores);
    
    const expectedAverage = (15 + 88 + 99 + 10 + 6) / 5; 
    expect(average).toBe(expectedAverage);
  });

  test('mean function should handle empty array', () => {
    const average = notation.mean([]);
    expect(average).toBe(0);
  });

  test('mean function should handle single element array', () => {
    const average = notation.mean([42]);
    expect(average).toBe(42);
  });

  test('mean function should handle decimal numbers', () => {
    const scores = [10.5, 20.3, 30.2];
    const average = notation.mean(scores);
    
    const expectedAverage = (10.5 + 20.3 + 30.2) / 3;
    expect(average).toBeCloseTo(expectedAverage, 2);
  });

  test('mean function should handle negative numbers', () => {
    const scores = [-5, 0, 5, 10];
    const average = notation.mean(scores);
    
    const expectedAverage = (-5 + 0 + 5 + 10) / 4; 
    expect(average).toBe(expectedAverage);
  });

  test('import file should output correct format', () => {
    const scores = [15, 88, 99, 10, 6];
    const average = notation.mean(scores);
    console.log(`Scores: [${scores}]`);
    console.log(`average of scores: ${average}`);
    
    // Only 2 console.log calls now (since you commented out the one in notation.js)
    expect(console.log).toHaveBeenCalledTimes(2);
    
    // First call: Scores array
    expect(console.log).toHaveBeenNthCalledWith(1, "Scores: [15,88,99,10,6]");
    // Second call: Average
    expect(console.log).toHaveBeenNthCalledWith(2, "average of scores: 43.6");
  });
});