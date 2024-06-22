/* eslint-disable import/prefer-default-export */
import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import _ from 'lodash';
import { parse } from './parser.js';

const getPath = (filepath) => resolve(cwd(), filepath);
const readFile = (filepath) => readFileSync(getPath(filepath), 'utf-8');
const getExtension = (filepath) => extname(filepath);
const diff = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(readFile(filepath1), getExtension(filepath1));
  const obj2 = parse(readFile(filepath2), getExtension(filepath2));
  
  const result = diff(obj1, obj2);

  return result;
};

export { genDiff };
