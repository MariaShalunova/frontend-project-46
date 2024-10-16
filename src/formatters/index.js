import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';


const formatter = (node, format) => {
  switch (format) {
    case 'stylish':
      return stylish(node);
    
    case 'plain':
      return plain(node);
    
    case 'json':
      return json(node);

    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};

export default formatter;