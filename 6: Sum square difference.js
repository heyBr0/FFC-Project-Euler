/* 
The sum of the squares of the first ten natural numbers is,
1² + 2² + ... + 10² = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)² = 55² = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

sumSquareDifference(10) should return a number.
sumSquareDifference(10) should return 2640.
sumSquareDifference(20) should return 41230.
sumSquareDifference(100) should return 25164150. */

function sumSquareDifference(n) {
  let sum1 = 0;
  let sum2 = 0;
  let difference = 0;
  let mid = 0;
  for (let i = 1; i <= n; i++) {
    sum1 += i ** 2;
  }
  for (let j = 1; j <= n; j++) {
    mid += j;
    sum2 = mid ** 2;
  }
  difference = sum2 - sum1;
  return difference;
}

console.log(sumSquareDifference(20));
