import _ from 'lodash';

const compare = (obj1, obj2) => {
  const newObj = ({ ...obj1, ...obj2 });
  let result = '';

  const keys = _.sortBy(Object.keys(newObj));

  for (const key of keys) {
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      result += `  + ${key}: ${obj2[key]}\n`;
    } else if (_.has(obj1, key) && !_.has(obj2, key)) {
      result += `  - ${key}: ${obj1[key]}\n`;
    } else if (_.isEqual(obj1[key], obj2[key])) {
      result += `    ${key}: ${obj2[key]}\n`;
    } else {
      result += `  - ${key}: ${obj1[key]}\n`;
      result += `  + ${key}: ${obj2[key]}\n`;
    }
  }

  return `{\n${result}}`;
};

export default compare;
