/* 
You are given an array containing positive and negative integers. 
Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12

Time Complexity: O(n) because you need to evaluate each element in the entire array

You might make it O(log n) if you divided the array, summed each half, recorded he max
sum of each half, and compared whether the maxLeft and maxRight values when summed (maxCombined) was
greater than either of its component parts.  Return maxLeft, maxRight, or maxCombined;
*/

function maxSum(array) {
  let sum = 0;
  let maxSum = 0;

  array.forEach(number => {
    sum += number;
    if (sum > maxSum) {
      maxSum = sum;
    }
  });
  return maxSum;
}

const arr = [4, 6, -3, 5, -2, 1]
console.log(maxSum(arr))