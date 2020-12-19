const compose = (...fns) => (...args) =>
  fns.reduceRight((acc, fn) => [fn.call(null, ...acc)], args)[0];

const _ = require("lodash");

//对函数进行curry...
// function curry(func) {
//   //如果传入的是全参数可以保证直接执行
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//       //如果参数不足够...则返回函数...即部分参数函数..前面的参数已经记住了...返回的部分函数可以接受参数...
//       //比如接收了参数后...只要没有满参还是返回函数..
//     } else {
//       //只有提供下个参数才会..继续cuiried...
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

const curry = (func) => (...args) => {
  if (args.length >= func.length) {
    return func.apply(this, args);
    //如果参数不足够...则返回函数...即部分参数函数..前面的参数已经记住了...返回的部分函数可以接受参数...
    //比如接收了参数后...只要没有满参还是返回函数..
  } else {
    //只有提供下个参数才会..继续cuiried...
    return function (...args2) {
      return curried.apply(this, args.concat(args2));
    };
  }
};

const sum = (a, b, c) => a * b * c;
let curriedSum = curry(sum);

console.log(curriedSum(2)(3, 4));
