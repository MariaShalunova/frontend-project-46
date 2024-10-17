import { expect, test } from '@jest/globals';
import formatter from '../src/formatters/index.js';

test('Check extension with format \'\'!', () => {
  const data = { key: 'value' };
  const expected = 'Unknown format: \'\'';

  expect(() => {
    formatter(data, '');
  }).toThrow(expected);
});
