const { timeWord } = require('./timeWord'); 

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('am test', () => {
  test('midnight', () => {
    expect(timeWord('00:00')).toEqual('midnight');
  });
  test("test 2", () => {
    expect(timeWord('00:12')).toEqual("twelve twelve am");
  });
  test('test 3', () => {
    expect(timeWord('01:00')).toEqual("one o'clock am");
  });
  test('test 4', () => {
    expect(timeWord('06:01')).toEqual("six oh one am");
  });
  test('test 5', () => {
    expect(timeWord('06:10')).toEqual("six ten am");
  });
  test('test 6', () => {
    expect(timeWord('06:18')).toEqual("six eighteen am");
  });
  test('test 7', () => {
    expect(timeWord('10:34')).toEqual("ten thirty four am");
  });
});

describe('pm test', () => {
  test('noon', () => {
    expect(timeWord('12:00')).toEqual('noon');
  });
  test("o'clock test", () => {
    expect(timeWord('12:09')).toEqual("twelve oh nine pm");
  });
  test('normal time', () => {
    expect(timeWord('23:23')).toEqual('eleven twenty three pm');
  });
});