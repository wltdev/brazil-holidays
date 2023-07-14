import { bootable } from '../index';

test('My Boot test', () => {
  expect(bootable()).toBe('started');
});
