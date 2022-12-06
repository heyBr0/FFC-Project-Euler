/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

smallestMult(5) should return a number.
smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560. */

function smallestMult(n) {
  let res = 0;
  let i = 1;
  let found = false;
  while (found === false) {
    res += n;
    while (res % i === 0 && i <= n) {
      if (i === n) {
        found = true;
      }
      i++;
    }
    i = 1;
  }
  return res;
}

console.log(smallestMult(20));
