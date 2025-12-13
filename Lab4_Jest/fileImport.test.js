const notation = require('./notation.js');
describe("Import file tests", () => {
  let consoleLogSpy;
  let meanSpy;
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    meanSpy = jest.spyOn(notation, 'mean').mockReturnValue(43.6);
  });
  afterEach(() => {
    consoleLogSpy.mockRestore();
    meanSpy.mockRestore();
    jest.clearAllMocks();
  });

  test('should output scores and average in correct format', () => {
    const scores = [15, 88, 99, 10, 6];
    const average = notation.mean(scores);
    console.log(`Scores: [${scores}]`);
    console.log(`average of scores: ${average}`);
    expect(notation.mean).toHaveBeenCalledWith([15, 88, 99, 10, 6]);
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, "Scores: [15,88,99,10,6]");
    expect(console.log).toHaveBeenNthCalledWith(2, "average of scores: 43.6");
  });
});