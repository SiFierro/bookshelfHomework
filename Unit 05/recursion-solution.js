/* Write your code here! */

/**
 * @param {number} n
 * @returns the sum of all numbers from 1 to n
 */
const sumNums = (n) => {
  // Base case
  if (n <= 1) return 1;

  // Recursive case
  return n + sumNums(n - 1);
};

/**
 * @param {number} h
 * @returns the number of cannonballs required to make a
 * square pyramidal formation of height h
 */
const cannonball = (h) => {
  // Base case
  if (h <= 1) return h;

  // Recursive case
  return h ** 2 + cannonball(h - 1);
};

/**
 * @param {string} str
 * @returns the given string with its characters reversed
 */
const reverseString = (str) => {
  // Base case
  if (str.length <= 1) return str;

  // Recursive case
  // Return the last letter + the front of the string reversed
  return str.at(-1) + reverseString(str.slice(0, -1));
};

/**
 * @param {string} str
 * @returns the length of the given string
 */
const getStringLength = (str) => {
  // Base case
  if (str === "") return 0;

  // Recursive case
  // Return 1 + length of the rest of the string
  return 1 + getStringLength(str.slice(1));
};

/**
 * @param {number[]} arr
 * @returns the sum of the numbers in arr
 */
const sumArray = (arr) => {
  // Base case
  if (arr.length === 0) return 0;

  // Recursive case
  // Return the first number + sum of rest of the array
  return arr[0] + sumArray(arr.slice(1));
};

/**
 * @param {number} n
 * @returns Return the nth Fibonacci number
 */
const fibonacci = (n) => {
  // Base case
  if (n <= 1) return n;

  // Recursive case
  return fibonacci(n - 2) + fibonacci(n - 1);
};

/**
 * @param {string} str
 * @returns whether the given string is a palindrome
 */
const isPalindrome = (str) => {
  // Base cases
  // There are 1 or fewer letters
  if (str.length <= 1) return true;

  str = str.toLowerCase(); // Ignore case

  // The first letter does not match the last letter
  if (str[0] !== str.at(-1)) return false;

  // Recursive case
  // Check the substring with the first and last letters removed
  return isPalindrome(str.slice(1, -1));
};

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  sumNums,
  cannonball,
  reverseString,
  getStringLength,
  sumArray,
  fibonacci,
  isPalindrome,
};
