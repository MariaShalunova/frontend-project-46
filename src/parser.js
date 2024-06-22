/* eslint-disable import/prefer-default-export */
import YAML from 'js-yaml';

const parse = (file, extension) => {
  switch (extension) {
    case '.yaml':
      return YAML.load(file);

    case '.json':
      return JSON.parse(file);

    default:
      throw new Error(`Unknown format: ${extension}`);
  }
};

export { parse };
