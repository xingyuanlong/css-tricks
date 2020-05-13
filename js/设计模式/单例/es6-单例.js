
class Singleton {
  constructor (name) {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    this.init(name);
    return Singleton.instance;
  }

  init (name) {
    this.name = name;
  }
}

const a = new Singleton('mobius');
const b = new Singleton('kiva');

console.log(a === b);
