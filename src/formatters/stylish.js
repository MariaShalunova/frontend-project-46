import _ from 'lodash';

const status = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const getIndent = (depth) => '  '.repeat(depth);

const formatBraces = (lines, depth) => [
  '{',
  ...lines,
  `${getIndent(depth)}}`,
].join('\n');

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${getIndent(depth + 1)}${key}: ${stringify(val, depth + 1)}`);
  
  return formatBraces(lines, depth);
};

const formatNode  = (node, depth = 1) => {
  const { key, value, type, value1, value2, children } = node;
  const indent = getIndent(depth);

    switch(type) {
      case 'added':
        return `${indent}${status.added} ${key}: ${stringify(value, depth + 1)}`;
      case 'deleted':
        return `${indent}${status.deleted} ${key}: ${stringify(value, depth + 1)}`;
      case 'changed':
        return [`${indent}${status.deleted} ${key}: ${stringify(value1, depth + 1)}`, 
                `${indent}${status.added} ${key}: ${stringify(value2, depth + 1)}`].join('\n');
      case 'nested':
        return `${indent}${status.nested} ${key}: ${stylish (children, depth + 1)}`;
      case 'unchanged':
        return `${indent}${status.unchanged} ${key}: ${stringify(value, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
};

const stylish = (node, depth = 1) => {
  const result = node.map(item => formatNode(item, depth));
  return formatBraces(result, depth);
};

export default stylish;