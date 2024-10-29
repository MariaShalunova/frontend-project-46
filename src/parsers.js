/* eslint-disable import/prefer-default-export */
import YAML from 'js-yaml';

const parse = (file, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(file);

    case 'yaml':
    case 'yml':
      return YAML.load(file);

    default:
      throw new Error(`Unknown format: ${extension}`);
  }
};

export default parse;
