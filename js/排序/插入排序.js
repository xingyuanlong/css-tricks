/**
 * 插入排序
 * 最简单直观的排序算法，它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
 * 算法步骤
 *    1.将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 *    2.从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 * 最好：O(n)，原数组已经是升序的。
 * 最坏：O(n²)
 * 平均：O(n²)
 */

const arr = [29, 10, 34, 40, 18, 56, 99, 88, 66];

const insertionSort = (arr) => {
  const tempArr = [...arr];
  const len = tempArr.length;
  let preIndex, current;
  for (let i = 1; i < len; i = i + 1) {
    preIndex = i - 1;
    current = tempArr[i];
    while (preIndex >= 0 && tempArr[preIndex] > current) {
      tempArr[preIndex + 1] = tempArr[preIndex];
      preIndex = preIndex - 1;
    }
    tempArr[preIndex + 1] = current;
  }
  return tempArr;
};

console.time('插入排序耗时');
console.log(insertionSort(arr));
console.timeEnd('插入排序耗时');


const binaryInsertionSort = (arr) => {
  const tempArr = [...arr];
  let current, i, j, low, high, mid;
  for (i = 1; i < tempArr.length; i = i + 1) {
    low = 0;
    high = i - 1;
    current = tempArr[i];
    // 折半查找
    while (low <= high) {
      // Math.floor((low + high)/2) .
      mid = (low + high) >> 1;
      // 值相同时, 切换到高半区，保证稳定性
      if (tempArr[i] >= tempArr[mid]) {
        // 插入点在高半区
        low = mid + 1;
      } else {
        // 插入点在低半区
        high = mid - 1;
      }
    }
    // 步骤3:插入位置之后的元素全部后移一位
    for (j = i; j > low; j = j - 1) {
      tempArr[j] = tempArr[j - 1];
    }
    // 步骤4:插入该元素
    tempArr[low] = current;
  }
  return tempArr;
};

console.time('折半插入排序耗时');
console.log(binaryInsertionSort(arr));
console.timeEnd('折半插入排序耗时');
