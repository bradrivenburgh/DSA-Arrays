/*
Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een

Time Complexity: O(n) because it must go all the way through the string, even though
string.slice() and assignment are O(1) operations.
*/

function urlify(string, delimiter) {
  let temp = string;
  let newStr = string;
  for (let i = 0; i < newStr.length; i++) {
    if (temp[i] === delimiter) {
      newStr = temp.slice(0, i) + '%20' + temp.slice(i + 1, temp.length);
      temp = newStr;
    }
  }
  return newStr;
}

console.log(urlify('www.thinkful.com /tauh ida parv een', ' '));