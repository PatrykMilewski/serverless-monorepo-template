import appendString from '../src/appendString';

it('should append something to the string', () => {
  const result = appendString('test');

  expect(result).toMatch('test/something');
});
