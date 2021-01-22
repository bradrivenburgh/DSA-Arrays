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

Time Complexity: O(m+n) 
*/

const twoDArr = (array) => {
  let rowsZero = [];
  let colsZero = [];
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (array[i][j] === 0) {
        rowsZero.push(i);
        colsZero.push(j);
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[0].length; j++) {
      if (rowsZero.includes(i) || colsZero.includes(j)) {
        array[i][j] = 0;
      }
    }
  }
  return array;
};


const array = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

console.log(twoDArr(array))