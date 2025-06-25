// Fibonacci series
// Each number is the sum of the two numbers before it.

// Solution 1: iterative
function fibIter(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}

// Solution 2: recursive
function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}

// Solution 3: using memoization
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}

module.exports = { fibIter, fibRec, fibMemo };

