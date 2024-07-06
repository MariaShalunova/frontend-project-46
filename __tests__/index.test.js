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

test('Comparison check: file1.yaml === file2.yaml', () => {
  const file1 = getFixturePath('file1.yaml');
  const file2 = getFixturePath('file2.yaml');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});

test('Comparison check: file1.yml === file2.yml', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});

test('Comparison check: file1.json === file2.yaml', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.yaml');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});

test('Comparison check: file1.json === file2.yml', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});

test('Comparison check: file1.yaml === file2.yml', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');

  const received = genDiff(file1, file2);
  const expected = readFile('testResult.txt');

  expect(received).toEqual(expected);
});