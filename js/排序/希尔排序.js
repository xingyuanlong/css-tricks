/**
 * 希尔排序https://juejin.im/post/5d371aa6e51d455d850d3bbe#heading-3
 * 也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。
 * 算法步骤
 *    1.选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；
 *    2.选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；
 *    3.每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 */

const arr = [29, 10, 34, 40, 18, 56, 99, 88, 66];


const shellSort = (arr) => {
  const tempArr = [...arr];
  const len = tempArr.length;
  let temp;
  let gap = 1;
  let j;
  // 动态定义间隔序列
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i = i + 1) {
      temp = tempArr[i];
      for (j = i - gap; j >= 0 && tempArr[j] > temp; j -= gap) {
        tempArr[j + gap] = tempArr[j];
      }
      tempArr[j + gap] = temp;
    }
  }
  return tempArr;
};
console.time('希尔排序耗时');
console.log(shellSort(arr));
console.timeEnd('希尔排序耗时');
