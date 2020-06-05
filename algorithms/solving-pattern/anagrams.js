//Given two strings, write a fucntion to determine if the
//second string is anagram of the first
//An anagram is word, prase, or name formed by rearranging the letters of another,
//such as cinama, formed from iceman

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  const char1 = str1.split('');
  const char2 = str2.split('');
  for (let val of char1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of char2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }
  return true;
}

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false;
  const lookup = {};
  for (let i = 0; i < str1.length; ++i) {
    let letter = str1[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; ++i) {
    let letter = str2[i];
    //Can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1; //decrement for one letter found
    }
  }
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram2('', ''));
console.log(validAnagram2('aaz', 'zzas'));
console.log(validAnagram2('aaz', 'zza'));
console.log(validAnagram2('cinema', 'iceman'));
