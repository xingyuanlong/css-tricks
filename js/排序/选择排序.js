/**
 * 选择排序
 * 一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧
 * 算法步骤
 *    1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
 *    2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾
 *    3.重复第二步，直到所有元素均排序完毕
 * 最好：O(n²)
 * 最坏：O(n²)
 * 平均：O(n²)
 */
const arr = [29, 10, 34, 40, 18, 56, 99, 88, 66];


const selectSort = (arr) => {
  const tempArr = [...arr];
  let minIndex = 0;
  for (let i = 0, len = tempArr.length; i < len; i = i + 1) {
    minIndex = i;
    for (let j = i + 1; j < len; j = j + 1) {
      if (tempArr[j] < tempArr[minIndex]) {
        minIndex = j;
      }
    }
    [tempArr[i], tempArr[minIndex]] = [tempArr[minIndex], tempArr[i]];
  }
  return tempArr;
};
console.time("选择排序耗时");
console.log(selectSort(arr));
console.timeEnd("选择排序耗时");
