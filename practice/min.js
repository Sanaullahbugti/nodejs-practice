// Find minimum in array
// Returns the smallest number in a given array.

// Solution 1: manual loop
function findMinLoop(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// Solution 2: Math.min with spread
function findMinMath(arr) {
  return Math.min(...arr);
}

// Solution 3: using reduce
function findMinReduce(arr) {
  return arr.reduce((min, n) => n < min ? n : min, arr[0]);
}

module.exports = { findMinLoop, findMinMath, findMinReduce };

