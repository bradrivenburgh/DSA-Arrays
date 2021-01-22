/*
Write an algorithm which searches through a 2D array, and whenever
it finds a 0 should set the entire row and column to 0.

Input:
[
[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]
];

Output:
[
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]
];

// Unable to solve;
Time Complexity: At least polynomial time O(n^2)

*/

function twoDArr(array) {

  let modifiedArray = array;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {

      if (array[i][j] === 0) {
        if (i >= 0 && i < array.length - 1) {
          modifiedArray[i + 1][j] = 0;

        }
        if (j > 0 && j < array[i].length - 1) {
          modifiedArray[i][j - 1] = 0;
          modifiedArray[i][j + 1] = 0;
        }
      }


    }
  }

  return modifiedArray;
}

const array = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

console.log(twoDArr(array))