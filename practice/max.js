// Find maximum in array
// Returns the largest number in a given array.

// Solution 1: manual loop
function findMaxLoop(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// Solution 2: Math.max with spread
function findMaxMath(arr) {
  return Math.max(...arr);
}

// Solution 3: using reduce
function findMaxReduce(arr) {
  return arr.reduce((max, n) => n > max ? n : max, arr[0]);
}

module.exports = { findMaxLoop, findMaxMath, findMaxReduce };

