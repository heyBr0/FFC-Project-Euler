/* 
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

largestPalindromeProduct(2) should return a number.
largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609. */

function largestPalindromeProduct(n) {
  let maxPalindrome = 0;
  let factor = 0;

  for (let i = Math.pow(10, n - 1); i <= Math.pow(10, n); i++) {
    let num = "" + i;
    let newNum = num;
    for (let j = num.length; j > 0; j--) {
      newNum += num.charAt(j - 1);
    }

    for (let k = Math.pow(10, n - 1); k < Math.pow(10, n); k++) {
      factor = Number(newNum) / k;
      if (factor % 1 === 0 && String(factor).length == n) {
        maxPalindrome = newNum;
      }
    }
  }

  return maxPalindrome;
}

console.log(largestPalindromeProduct(2))
