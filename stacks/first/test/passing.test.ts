import { handler } from '../src/passing';

it('should append something to the string', async () => {
  const event = {
    text: 'test 123',
  };

  const result = await handler(event);

  expect(result).toBe(true);
});
