// 简单单例模式
const SimpleSingletonCommon = function (name) {
  this.name = name;
  this.instance = null;
};
SimpleSingletonCommon.prototype.getName = function () {
  return this.name;
};
SimpleSingletonCommon.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new SimpleSingletonCommon(name);
  }
  return this.instance;
};
const a = SimpleSingletonCommon.getInstance('sven1');
const b = SimpleSingletonCommon.getInstance('sven2');

console.log(a === b); // true
console.log(a.getName()); // sven1
console.log(b.getName()); // sven1


// 简单单例模式 闭包
const SimpleSingletonClosure = function (name) {
  this.name = name;
  this.instance = null;
};

SimpleSingletonClosure.prototype.getName = function () {
  return this.name;
};

SimpleSingletonClosure.getInstance = (function () {
  let instance = null;
  return function (name) {
    if (!instance) {
      instance = new SimpleSingletonClosure(name);
    }
    return instance;
  };
})();

const c = SimpleSingletonClosure.getInstance('sven1');
const d = SimpleSingletonClosure.getInstance('sven2');

console.log(c === d); // true
console.log(c.getName()); // sven1
console.log(d.getName()); // sven1
