function fe (a, b, c, d) {
  return a + b + c + d;
}

const curry = (fe) => {
  let args = []; // 参数集合
  return function bar () {
    args = [...args, ...arguments]; // 收集参数
    if (args.length >= fe.length) {
      return fe.apply(this, args);
    }
    return bar;
  };
};

console.log(curry(fe)(1)(2)(3)(4));

const currying = function (fn) {
  const args = [];
  return function fe () {
    if (arguments.length === 0) {
      return fn.apply(this, args);
    }
    [].push.apply(args, arguments);
    return fe;
  };
};
const count = currying(function (...rest) {
  return rest.reduce((prev, cur) => prev + cur, 0);
});

console.log(count(100)(200)(10)());
