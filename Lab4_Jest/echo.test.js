const echo = require('./echo.js');

describe("Echo tests", () => {
  beforeEach(() => {

    global.console = {
      log: jest.fn()
    };
  });

  afterEach(() => {

    jest.clearAllMocks();
  });

  test('passing "echo" and 5 : exf should log "echo" 5 times', () => {

    echo.exf("echo", 5);
   

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith("echo");
  });

  test('passing "JS from server" and 10 : exf should log 10 times', () => {

    echo.exf("JS from server", 10);
   

    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenCalledWith("JS from server");
  });
});