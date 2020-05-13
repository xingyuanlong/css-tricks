class Observer {
  constructor (data) {
    this.observe(data);
  }

  observe (data) {
    for (const k in data) {
      let v = data[k];
      if (Object.prototype.toString.call(data[k]) === '[object Object]') {
        data[k] = new Observer(data[k]);
        v = JSON.stringify(v);
      }
      Object.defineProperty(this, k, {
        enumerable: true,
        configurable: true,
        get () {
          console.log(`你访问了 ${k} = ${v}`);
          return data[k];
        },
        set (newVal) {
          console.log(`你设置了${k} = ${newVal}`);
          if (newVal === data[k]) {
            return;
          }
          data[k] = newVal;
        },
      });
    }
  }
}

const obj = {
  name: 'app',
  age: '18',
  a: {
    b: 1,
    c: 2,
  },
};
const app = new Observer(obj);
app.a.c = 20;
