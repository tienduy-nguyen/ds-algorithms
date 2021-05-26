// 8 queens puzzles

const size = 8;
let arr = Array.from({ length: size }, () => 0);
// a = [0, 4, 7, 5, 2, 6, 1, 3];

function printBoard(a) {
  for (let i = 0; i < size; ++i) {
    str = '';
    for (let j = 0; j < n; ++j) {
      if (a[i] == j) str += '1 ';
      else str += '0 ';
    }
    console.log(str);
  }
}

// printBoard(a);
function possible(x, y) {
  for (let i = 0; i < x; ++i) {
    if (arr[i] == y || x + y == i + arr[i] || y - x == arr[i] - i) return false;
  }
  return true;
}

let count = 0;

function gen(i, n) {
  for (let j = 0; j < n; ++j) {
    if (possible(i, j)) {
      arr[i] = j;
      if (i == n - 1) {
        count += 1;
        console.log(arr);
      }

      gen(i + 1, n);
    }
  }
}

gen(0, size);
console.log(count);
