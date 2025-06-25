// Find an element in an unsorted array
// Returns the index of the target or -1 if not found.

// Solution 1: linear search
function findLinear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Solution 2: using indexOf
function findIndexOf(arr, target) {
  return arr.indexOf(target);
}

// Solution 3: sort then binary search
const { findBinary } = require('./findTargetSorted');
function sortAndFind(arr, target) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = findBinary(sorted, target);
  if (index === -1) return -1;
  // Convert index in sorted array back to original index
  return arr.indexOf(sorted[index]);
}

module.exports = { findLinear, findIndexOf, sortAndFind };

