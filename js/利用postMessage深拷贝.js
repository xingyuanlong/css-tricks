function deepClone(obj) {
  return new Promise(function (resolve, reject) {
    var { port1, port2 } = new MessageChannel();
    port1.onmessage = function (e) {
      resolve(e.data);
    };
    port2.postMessage(obj);
  });
}
var a = { a: 1, b: { c: { d: 1 } } };

// 无法拷贝
// var a = { a: 1, b: { c: { d: 1 }, e: function(){ console.log('a:', a)} } };

deepClone(a).then((e) => console.log(a === e));
