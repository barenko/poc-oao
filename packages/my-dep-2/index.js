const dep1 = require('@poc-oao/my-dep-1');

module.exports = function (a) {
  return `dep2: ${dep1(a)}`;
};
