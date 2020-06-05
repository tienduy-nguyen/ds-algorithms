// Algorithm Challenge

//     Return true if the given string is a palindrome. Otherwise, return false.

//     A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//     Note. You’ll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

//     We’ll pass strings with varying formats, such as “racecar”, “RaceCar”, and “race CAR” among others.

function palidrome(str) {
  let reversed = str.split('').reverse().join('');
  if (reversed === str) return true;
  return false;
}
function palidrome1(str) {
  let len = str.length;
  for (let i = 0; i < len; ++i) {
    if (str[i] !== str[len - i - 1]) return false;
  }
  return true;
}

function palidrome2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
module.exports = palidrome;
