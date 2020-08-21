//Convert an array to set
// Set in javascript is available form ES6
let arr1 = [55, 44, 65];
let set1 = new Set(arr1);

let arr2 = [
  { name: 'malcom', dogType: 'four-legged' },
  { name: 'peabody', dogType: 'three-legged' },
  { name: 'pablo', dogType: 'two-legged' },
];
let set2 = new Set(arr2.map((item) => item.name));

//Convert an array to set
let set3 = new Set();
let arr3 = Array.from(set3);
//ES6
let arr4 = [...set3];

// Watch more on the documentation of developer.mozilla.org
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

//-------------------------------------
//Using the Set object
//-------------------------------------
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add('some text'); // Set [ 1, 5, 'some text' ]
let o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet.has(1); // true
mySet.has(3); // false, since 3 has not been added to the set
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5); // false, 5 has been removed

mySet.size; // 4, since we just removed one value

console.log(mySet);
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

//------------------------------------
//Interating set
//------------------------------------
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
console.log('------------');
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
console.log('------------');
for (let item of mySet.keys()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
console.log('------------');
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
console.log('------------');
for (let [key, value] of mySet.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
let myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
arrx = [...mySet2]; // [1, 2, 3, 4]

// intersect can be simulated via
let intersection = new Set([...set1].filter((x) => set2.has(x)));

// difference can be simulated via
let difference = new Set([...set1].filter((x) => !set2.has(x)));

// Iterate set entries with forEach()
mySet.forEach(function (value) {
  console.log(value);
});

//--------------------------------------------------
//Implementing basic set operations
//--------------------------------------------------
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersect(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function difference(setA, setB) {
  let _difference = new Set(SetA);
  for (let elem in setB) {
    if (setA.has(elem)) {
      _difference.delete(elem);
    }
  }
  return _difference;
}

//--------------------------------------
//Relation with String
//--------------------------------------
let text = 'India';

let mySet = new Set(text); // Set ['I', 'n', 'd', 'i', 'a']
mySet.size; // 5

//case sensitive & duplicate ommision
new Set('Firefox'); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]
new Set('firefox'); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
