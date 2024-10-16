import formatter from '../src/formatters/index.js';
import {expect, jest, test} from '@jest/globals';


test("Check extension with format \'\'!", () => {
  const data = { key: 'value' };
  const expected = `Unknown format: ''`;

  expect(() => {
    formatter(data, '');
  }).toThrow(expected);
});