/* 
Given an array of numbers, write an algorithm that outputs an array 
where each index is the product of all the numbers in the input array
except for the number at each current index. See the following example 
input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]

Time Complexity: Polynomial time (n^2) since the same array is looped over
twice.

*/

function products(array) {
  const productArr = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    let toIgnore = array[i];

    for (element of array) {
      if (element !== toIgnore) {
        product *= element;
      }
    }
    
    productArr.push(product);
  }

  return productArr;
}

const array = [1, 3, 9, 4];
console.log(products(array))