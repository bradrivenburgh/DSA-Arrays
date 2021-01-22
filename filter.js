/*
  Imagine you have an array of numbers. Write an algorithm to remove all
  numbers less than 5 from the array. DO NOT use Array's built-in .filter() 
  method here; write the algorithm from scratch. 

  Sample input [1, 2, 6, 10]
  Sample output [6, 10]

  filter()
  Time Complexity: O(n) because it must iterate over the entire array length

  revisedFilter()
  Time Complexity: O(log n) because it divides the length searched in half
  Need to add a comparison of min and max values in array to return an ordered array.
  */

function filter(arr) {
  let newArr = [];
  for (element of arr) {
    if (element >= 5) {
      newArr.push(element);
    }
  }
  return newArr;
}

function revisedFilter(array, value = 0) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let newArray = []
  
  if (array.length === 0 || !value || value === 0) { 
    return; 
  }

  if (array.length === 1) {
    if (array[0] > value) {
      return array;
    }
    return;
  }

  while (minIndex < maxIndex) {
    if (array[minIndex] > value) {
        newArray.push(array[minIndex]);
    }

    if (array[maxIndex] > value) {
      newArray.push(array[maxIndex]);
    } 

    maxIndex--;
    minIndex++;

  }
  return newArray;
}

// console.log(filter([1, 2, 6, 10]))
console.log(revisedFilter([1, 2, 6, 10, 2, 8], 5));