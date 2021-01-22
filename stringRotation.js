/* 
Given 2 strings, str1 and str2, write a program 
that checks if str2 is a rotation of str1.

Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true

Time Complexity = Since indexOf must loop through the string
once checking for a pattern, it is linear time O(n) in the worst case,
though it is probably O(log n) or better in the best case.

*/

function stringRotation(str1, str2) {
  const size1 = str1.length; 
  const size2 = str2.length; 
  let temp = '';

  if (size1 != size2) {
    return false;
  }

  temp = str1 + str1;
  return (temp.indexOf(str2) !== -1)
}

const str1 = 'amazon';
const str2 = 'azonma';
const str3 = 'amazon';
const str4 = 'azonam'

console.log(stringRotation(str1, str2));  // Returns false
console.log(stringRotation(str3, str4));  // Returns true
