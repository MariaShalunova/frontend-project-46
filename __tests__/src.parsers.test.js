import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import parse from '../src/parsers.js';
import {expect, jest, test} from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('Check extension with format \'\'!', () => {
  const file1 = getFixturePath('file1.xml');
  const expected = `Unknown format: ''`;

  expect(() => {
    parse(file1, `''`);
  }).toThrow(expected);
});