// 内部方法：用户合并一个或多个对象到第一个对象
// 参数：
// target 目标对象  对象都合并到target里
// source 合并对象
// deep 是否执行深度合并
function extend(target, source, deep) {
  for (key in source)
    if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
      // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
      if (isPlainObject(source[key]) && !isPlainObject(target[key]))
        target[key] = {};

      // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
      if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
      // 执行递归
      extend(target[key], source[key], deep);
    }
    // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
    else if (source[key] !== undefined) target[key] = source[key];
}

// Copy all but undefined properties from one or more
// objects to the `target` object.
$.extend = function (target) {
  console.log(arguments,'arguments');
  var deep,
    args = Array.prototype.slice.call(arguments, 1);

  //第一个参数为boolean值时，表示是否深度合并
  if (typeof target == "boolean") {
    deep = target;
    //target取第二个参数
    target = args.shift();
  }
  // 遍历后面的参数，都合并到target上
  args.forEach(function (arg) {
    extend(target, arg, deep);
  });
  return target;
};


// https://www.html.cn/doc/zeptojs_api/#$.extend
// $.extend
// $.extend(target, [source, [source2, ...]])   ⇒ target
// $.extend(true, target, [source, ...])   ⇒ target v1.0+
// 通过源对象扩展目标对象的属性，源对象属性将覆盖目标对象属性。

// 默认情况下为，复制为浅拷贝（浅复制）。如果第一个参数为true表示深度拷贝（深度复制）
