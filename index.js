const _  = require('lodash');

const items = [2, [3, [2, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);