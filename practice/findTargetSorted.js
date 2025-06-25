// Find an element in a sorted array
// Returns the index of the target or -1 if not found.

// Solution 1: linear search
function findLinear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Solution 2: binary search
function findBinary(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

// Solution 3: using indexOf (array is already sorted)
function findIndexOf(arr, target) {
  return arr.indexOf(target);
}

module.exports = { findLinear, findBinary, findIndexOf };

