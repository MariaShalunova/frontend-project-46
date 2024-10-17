import _ from 'lodash';

const status = {
  added: '+',
  deleted: '-',
  unchanged: ' ',
  nested: ' ',
};

const getIndent = (depth, correctSize = 0) => {
  const replacer = '  ';
  const spacesCount = 2;
  const indentSize = depth * spacesCount;
  const currentIndent = replacer.repeat(indentSize - correctSize);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);
  return { currentIndent, bracketIndent };
};

const formatBraces = (lines, depth) => {
  const { currentIndent, bracketIndent } = getIndent(depth);
  return [
  '{',
  ...lines,
  `${bracketIndent}}`,
].join('\n');
};

const stringify = (value, depth) => {
  const { currentIndent, bracketIndent } = getIndent(depth);
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const lines = Object
    .entries(value)
    .map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`);
  
  return formatBraces(lines, depth);
};

const formatNode  = (node, depth = 1) => {
  const { key, value, type, value1, value2, children } = node;
  const { currentIndent, bracketIndent } = getIndent(depth, 1);

    switch(type) {
      case 'added':
        return `${currentIndent}${status.added} ${key}: ${stringify(value, depth + 1)}`;
      case 'deleted':
        return `${currentIndent}${status.deleted} ${key}: ${stringify(value, depth + 1)}`;
      case 'changed':
        return [`${currentIndent}${status.deleted} ${key}: ${stringify(value1, depth + 1)}`, 
                `${currentIndent}${status.added} ${key}: ${stringify(value2, depth + 1)}`].join('\n');
      case 'nested':
        return `${currentIndent}${status.nested} ${key}: ${stylish (children, depth + 1)}`;
      case 'unchanged':
        return `${currentIndent}${status.unchanged} ${key}: ${stringify(value, depth + 1)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
};

const stylish = (node, depth = 1) => {
  const result = node.map(item => formatNode(item, depth));
  return formatBraces(result, depth);
};

export default stylish;