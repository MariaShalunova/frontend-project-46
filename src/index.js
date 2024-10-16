/* eslint-disable import/prefer-default-export */
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';
import parse from './parsers.js';
import compareDeep from './compareDeep.js';
import formatter from './formatters/index.js';

const getPath = (filepath) => path.resolve(cwd(), filepath);
const readFile = (filepath) => readFileSync(getPath(filepath), 'utf-8');
const saveFile = (filepath, data) => writeFileSync(filepath, data, 'utf-8');
const getExtension = (filepath) => path.extname(filepath);

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(readFile(filepath1), getExtension(filepath1));
  const obj2 = parse(readFile(filepath2), getExtension(filepath2));

  const result = compareDeep(obj1, obj2);

  const data = formatter(result, format);

  const filename = '__fixtures__/expectedResultStylish.txt';
  saveFile(filename, data);
  return data;
};

export default gendiff;
