class PubSub {
  constructor() {
      this.subscribers = []; // 订阅列表
  }
  // 添加订阅
  subscribe(subTarget, fn) {
      // 检查订阅列表是否存在订阅对象
      let targetFn = this.subscribers[subTarget];
      if (!targetFn) {
          this.subscribers[subTarget] = [fn];
      } else {
          targetFn.push(fn);
      }
  }
  // 发布
  publish(subTarget, ...args) {
      let fns = this.subscribers[subTarget] || [];
      fns.forEach(callback => {
          callback(...args)
      });
  }
}

// 创建事件调度中心，为订阅者和发布者提供调度服务
let pubSub = new PubSub();

// A订阅了"CSS"事件
pubSub.subscribe('CSS', (data) => {
  console.log("A收到了: ", data);
});

// B订阅了"CSS"事件
pubSub.subscribe('CSS', (data) => {
  console.log("B收到了: ", data);
});

// 调度中心通知每个订阅者
pubSub.publish('CSS', 'C发布"CSS"通知');


// => A收到了:  C发布"CSS"通知
// => B收到了:  C发布"CSS"通知
