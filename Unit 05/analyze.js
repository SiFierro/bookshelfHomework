const { bookText } = require("./book-text");

/* Your code here! */

// 1. How many tokens are in bookText?
console.log(`There are ${bookText.length} tokens in bookText`);

// 2. What is the total number of characters in bookText?
const numChars = bookText.reduce((acc, elem) => acc + elem.length, 0);
console.log(`There are ${numChars} characters in bookText`);

// 3. What is the mean length of a token?
console.log(`The mean length of a token is ${numChars / bookText.length}`);

// 4. What is the length of the longest token?

// The accumulator is being used to track the longest token
// that we've seen so far in the array, and only updates
// when we see a longer token.
const longestToken = bookText.reduce((longestSoFar, token) =>
  token.length > longestSoFar.length ? token : longestSoFar
);
console.log(
  `The longest token is ${longestToken} with length ${longestToken.length}`
);

// 5. How many tokens are longer than 4 characters?
const longerThan4 = bookText.filter((token) => token.length > 4);
console.log(`There are ${longerThan4.length} tokens longer than 4 characters`);

// 6. How many tokens start with the letter 's' (case-insensitive)?

/**
 * @param {string} letter
 * @returns the tokens that starts with the given letter
 */
const startsWith = (letter) =>
  bookText.filter(
    (token) => token.length > 0 && token[0].toLowerCase() === letter
  );

const startsWithS = startsWith("s").length;
console.log(`There are ${startsWithS} tokens that start with the letter 's'`);

// 7. Do more tokens start with the letter 's' or 't'?
const startsWithT = startsWith("t").length;
console.log(`There are ${startsWithT} tokens that start with the letter 't'`);
console.log(`More tokens start with ${startsWithS > startsWithT ? "s" : "t"}.`);

// 8. What are the 5 most frequent tokens that appear in the text,
// and how many times do they each appear?

// The accumulator is an object {token: frequency}.
const tokenFrequencies = bookText.reduce((frequencies, token) => {
  token = token.toLowerCase();
  frequencies[token] = (frequencies[token] ?? 0) + 1; // Uses the nullish coallescing operator ??
  return frequencies;
}, {});

// Object.entries converts tokenFrequencies into an array,
// which we can then sort by the frequency
const sortedTokens = Object.entries(tokenFrequencies).sort(
  (f1, f2) => f2[1] - f1[1]
);

console.log(
  `The 5 most frequent tokens + frequencies are:
  ${sortedTokens.slice(0, 5).join("\t\t")}`
);

// 9. What are the 5 most frequent characters that appear in the text,
// and how many times do they each appear?

// Same idea as previous question, except now we loop through the token
const charFrequencies = bookText.reduce((freqs, token) => {
  token = token.toLowerCase();
  for (const c of token) {
    freqs[c] = (freqs[c] ?? 0) + 1;
  }
  return freqs;
}, {});

const sortedChars = Object.entries(charFrequencies).sort(
  (c1, c2) => c2[1] - c1[1]
);

console.log(
  `The 5 most frequent characters + frequencies are:
  ${sortedChars.slice(0, 5).join("\t\t")}`
);

// 10. How many tokens do not contain any vowels?

/**
 * @param {string} str
 * @returns whether the given str does not contain a vowel
 */
const containsNoVowels = (str) => {
  str = str.toLowerCase();
  for (const char of str) {
    if ("aeiou".includes(char)) return false;
  }
  return true;
};

const noVowels = bookText.filter(containsNoVowels);

console.log(`${noVowels.length} tokens do not contain any vowels.`);
