function reverseString(str) {
  return str.split('').reverse().join('');
}
function reverseString1(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; --i) {
    reversed += str[i];
  }
  return reversed;
}
function reverseString2(str) {
  let reversed = '';
  let len = str.length;
  for (let i = 0; i < len; ++i) {
    reversed += str.charAt(len - i - 1);
  }
  return reversed;
}
function reverseString3(str) {
  let reversed = [];
  let len = str.length;
  for (let i = len - 1, j = 0; i >= 0; ++j, --i) {
    reversed[j] = str[i];
  }
  return reversed.join('');
}
function reverseString4(str) {
    let reversed = [];
    let len = str.length;
    for (let i = len - 1, j = 0; i >= 0; ++j, --i) {
      reversed[j] = str[i];
    }
    return reversed.join('');
  }
console.log(reverseString('Hello'));
console.log(reverseString1('Hello'));
console.log(reverseString2('Hello'));
console.log(reverseString3('Hello'));


module.exports = reverseString;
