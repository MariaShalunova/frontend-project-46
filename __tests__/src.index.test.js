import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const testData = [
  ['file1.json', 'file2.json', 'stylish', 'expectedResultStylish.txt'],
  ['file1.yaml', 'file2.yaml', 'stylish', 'expectedResultStylish.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'expectedResultPlain.txt'],
  ['file1.json', 'file2.yaml', 'plain', 'expectedResultPlain.txt'],
  ['file1.json', 'file2.yml', 'json', 'expectedResultJson.txt'],
  ['file1.yaml', 'file2.yml', 'json', 'expectedResultJson.txt'],
];

describe.each(testData)('Comparison check:', (fileName1, fileName2, format, expectedResult) => {
  test(`correct diff for ${fileName1} === ${fileName2} in ${format}`, () => {
    const file1 = getFixturePath(fileName1);
    const file2 = getFixturePath(fileName2);

    const received = gendiff(file1, file2, format);
    const expected = readFile(expectedResult);

    expect(received).toEqual(expected);
  });
});
