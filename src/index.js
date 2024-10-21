/* eslint-disable import/prefer-default-export */
import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';
import parse from './parsers.js';
import compareDeep from './compareDeep.js';
import formatter from './formatters/index.js';

const getPath = (filepath) => path.resolve(cwd(), filepath);
const readFile = (filepath) => readFileSync(getPath(filepath), 'utf-8');
const getExtension = (filepath) => path.extname(filepath).split('.')[1];

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(readFile(filepath1), getExtension(filepath1));
  const obj2 = parse(readFile(filepath2), getExtension(filepath2));

  const diffTree = compareDeep(obj1, obj2);

  return formatter(diffTree, format);
};

export default gendiff;
