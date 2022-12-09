/* 
The prime factors of 13195 are 5, 7, 13 and 29.

--> A Prime Number is: a whole number greater than 1 that can not be made by multiplying other whole numbers

What is the largest prime factor of the given number?

largestPrimeFactor(2) should return a number.
largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(8) should return 2.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.
*/

function largestPrimeFactor(number) {
  let prime = 2;
  let max
  while (prime <= number) {
    if (number % prime === 0) {
      max = prime;
      number = number / prime;
    } else prime++;
  }
  return max;
}

console.log(largestPrimeFactor(8));
