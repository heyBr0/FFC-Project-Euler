/* 
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

--> A Prime Number is: a whole number greater than 1 that can not be made by multiplying other whole numbers

What is the nth prime number?

nthPrime(6) should return a number.
nthPrime(6) should return 13.
nthPrime(10) should return 29.
nthPrime(100) should return 541.
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743. */

/* function nthPrime(n) {
  const primes = [2];
  let num = 3;
  let isPrime = true;

  while (primes.length < n) {
    let max = Math.ceil(Math.sqrt(num));

    for (let i = 0; primes[i] <= max; i++) {
      if (num % primes[i] == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
    isPrime = true;
    num += 2;
  }
  return primes[primes.length - 1];
}
console.log(nthPrime(6)); */
