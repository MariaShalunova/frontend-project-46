import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { genDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('Comparison check: file1.json === file2.json', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});
