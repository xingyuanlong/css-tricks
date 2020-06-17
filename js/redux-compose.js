// 将多个函数进行组合成一个函数, 将前一个函数的返回值当中后一个的参数,依次执行
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
