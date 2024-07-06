/* eslint-disable import/prefer-default-export */
import { readFileSync} from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parse from './parser.js';
import compare from './compare.js';

const getPath = (filepath) => resolve(cwd(), filepath);
const readFile = (filepath) => readFileSync(getPath(filepath), 'utf-8');
const getExtension = (filepath) => extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(readFile(filepath1), getExtension(filepath1));
  const obj2 = parse(readFile(filepath2), getExtension(filepath2));

  // console.log(`obj1: \n ${JSON.stringify(obj1, null, 2)}`);
  // console.log(`obj2: \n ${JSON.stringify(obj2, null, 2)}`);

  const result = compare(obj1, obj2);

  return result;
};

export { genDiff };
