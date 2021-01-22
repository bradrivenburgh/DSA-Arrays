/* 
Write an algorithm that deletes given characters from a string. 
For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
and the characters to be removed are "aeiou", the algorithm should 
transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'

Time Complexity: Polynomial time O(n^2) in worst case, though if
toDelete contains one character it would be linear time O(n)
*/


function removeChars(string, toDelete) {
  let temp = string;
  let newStr = string;
  
  for (char of toDelete) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === char ) {
        newStr = temp.slice(0, i) + temp.slice(i + 1, temp.length);
        temp = newStr;
        // Decrease counter in case the same letter appears twice
        // in a row 
        i--;
      }
    }
  }
  return newStr;
}

const string = 'Battle of the Vowels: Hawaii vs. Grozny';
const toDelete = 'aeiou';

console.log(removeChars(string, toDelete));