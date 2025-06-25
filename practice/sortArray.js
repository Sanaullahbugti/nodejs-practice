// Sort an array in ascending order
// Returns a new sorted array.

// Solution 1: using built-in sort
function sortWithBuiltIn(arr) {
  return [...arr].sort((a, b) => a - b);
}

// Solution 2: bubble sort
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

// Solution 3: insertion sort
function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    let j = i - 1;
    const key = a[i];
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}

module.exports = { sortWithBuiltIn, bubbleSort, insertionSort };

