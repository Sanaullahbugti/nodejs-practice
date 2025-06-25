// Prime number check
// A prime number is only divisible by 1 and itself.

// Solution 1: basic loop
function isPrimeBasic(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Solution 2: loop up to square root
function isPrimeSqrt(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Solution 3: using Array.every
function isPrimeArray(n) {
  if (n < 2) return false;
  return Array.from({ length: n - 2 }, (_, i) => i + 2).every(i => n % i !== 0);
}

module.exports = { isPrimeBasic, isPrimeSqrt, isPrimeArray };

