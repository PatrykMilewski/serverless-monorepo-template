import { handler } from '../src/failing';

it('should throw an error', async () => {
  const event = {
    text: 'test 123',
  };

  await expect(handler(event)).rejects.toBeTruthy();
});
