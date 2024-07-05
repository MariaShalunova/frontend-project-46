import _ from 'lodash';

const compare = (obj1, obj2) => {
  const newObj = ({ ...obj1, ...obj2 });
  let result = '';

  const keys = _.sortBy(Object.keys(newObj));

  for (const key of keys) {
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      result += `\n  + ${key}: ${obj2[key]}`;
    } else if (_.has(obj1, key) && !_.has(obj2, key)) {
      result += `\n  - ${key}: ${obj1[key]}`;
    } else if (_.isEqual(obj1[key], obj2[key])) {
      result += `\n    ${key}: ${obj2[key]}`;
    } else {
      result += `\n  - ${key}: ${obj1[key]}`;
      result += `\n  + ${key}: ${obj2[key]}`;
    }
  }

  return `{${result}\n}`;
};

export default compare;
