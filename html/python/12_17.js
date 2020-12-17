const compose = (...fns) => (...args) =>
  fns.reduceRight((acc, fn) => [fn.call(null, ...acc)], args)[0];

const reverse = reduce((acc, x) => [x].concat(acc), []);
const l = ['jumpkick', 'roundhouse', 'uppercut']

[1]

[2,1]

[3,2,1]