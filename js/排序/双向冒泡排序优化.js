/**
 * 冒泡排序
 * 通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值。
 * 算法步骤
 *    1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 *    2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
 *    3.针对所有的元素重复以上的步骤，除了最后一个。
 *    4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
 * 最好：O(n)，只需要冒泡一次数组就有序了。
 * 最坏：O(n²)
 * 平均：O(n²)
 */
const arr = [29, 10, 34, 40, 18, 56, 99, 88, 66];

const bubbleSort = (arr) => {
  const tempArr = [...arr];
  for (let i = 0, k = tempArr.length - 1; i < k; i = i + 1) {
    for (let j = 0; j < k - i; j = j + 1) {
      if (tempArr[j] > tempArr[j + 1]) {
        [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
      }
    }
  }
  return tempArr;
};
console.time("单向冒泡耗时");
console.log(bubbleSort(arr));
console.timeEnd("单向冒泡耗时");

const bothwayBubbleSort = (arr) => {
  const tempArr = [...arr];
  let tail = tempArr.length - 1;
  let i;
  for (i = 0; i < tail; tail = tail - 1) {
    // 第一轮, 先将最小的数据冒泡到前面
    for (let j = tail; j > i; j = j - 1) {
      if (tempArr[j - 1] > tempArr[j]) {
        [tempArr[j - 1], tempArr[j]] = [tempArr[j], tempArr[j - 1]];
      }
    }
    i = i + 1;
    // 第二轮, 将最大的数据冒泡到后面
    for (let j = i; j < tail; j = j + 1) {
      if (tempArr[j] > tempArr[j + 1]) {
        [tempArr[j + 1], tempArr[j]] = [tempArr[j], tempArr[j + 1]];
      }
    }
    console.log(tempArr);
  }
  return tempArr;
};

console.time("双向冒泡耗时");
console.log(bothwayBubbleSort(arr));
console.timeEnd("双向冒泡耗时");
