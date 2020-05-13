Function.prototype.after = function (fn) {
  const self = this;
  return function () {
    const ret = self.apply(this, arguments);
    if (ret === 'next') {
      return fn.apply(this, arguments);
    }
    return ret;
  };
};
const order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('order500');
  } else {
    return 'next'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
const order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('order200');
  } else {
    return 'next'; // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};
const orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券');
  } else {
    console.log('手机库存不足');
  }
};
const order = order500.after(order200).after(orderNormal);

order(1, true, 500); // 输出：order500
order(2, true, 500); // 输出：order200
order(1, false, 500); // 输出：普通购买，无优惠券
