class Observer {
  constructor(name) {
    this.count = 1;
    this.name = name;  // 订阅者名称
    this.list = [];  // 订阅列表
  }
  subscribe(target, fn) {
    target.list.push(fn);
  }
  publish(data) {
    this.count = data;
    this.list.map((item) => {
      item('count改为 ' + this.count);
    })
  }
}
let a = new Observer('A');
let b = new Observer('B');
let c = new Observer('C');
// b、c都订阅了a
b.subscribe(a, (data) => {
  console.log('b收到了a发布的消息: ', data);
})
c.subscribe(a, (data) => {
  console.log('c收到了a发布的消息: ', data);
})


// a修改count通知所有订阅者
a.publish(4);
// => b收到了a发布的消息:  count改为 4
// => c收到了a发布的消息:  count改为 4


