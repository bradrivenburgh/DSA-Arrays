/*
Imagine you have 2 arrays which have already been sorted. 
Write an algorithm to merge the 2 arrays into a single array, 
which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

Time complexity: O(n) because you have to iterate over the entire 
length of the longest array.

*/


function mergeArrays(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {

    let isArr1Depleted = index1 >= arr1.length;
    let isArr2Depleted = index2 >= arr2.length;

    if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] < arr2[index2]))) {
      merged[current] = arr1[index1];
      index1++;
    } else {
      merged[current] = arr2[index2];
      index2++;
    }

    current++;
  }

  return merged;
}

const array1 = [1, 3, 6, 8, 11];
const array2 = [2, 3, 5, 8, 9, 10];

console.log(mergeArrays(array1, array2));